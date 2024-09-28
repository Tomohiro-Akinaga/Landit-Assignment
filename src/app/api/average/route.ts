import { NextRequest, NextResponse } from 'next/server'
import { PREF_CODES } from '@/constants/prefCode'
import { console } from 'inspector'
import { DISPLAY_TYPE } from '@/constants/displayType'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const year = searchParams.get('year')
  const displayType = searchParams.get('displayType')

  try {
    const allRes = await Promise.all(
      PREF_CODES.map(async (v) => {
        const res = await fetch(
          `${process.env.RESAS_API_URL}?year=${year}&prefCode=${v.code}&cityCode=-&displayType=${displayType}`,
          {
            headers: {
              'content-type': 'application/json',
              'X-API-KEY': process.env.RESAS_API_KEY || '',
            },
          }
        )
        const data = await res.json()
        return data.result
      })
    )

    const displayTypeLabel = DISPLAY_TYPE.find((v) => v.value === displayType)
    const totalPrice = allRes.reduce((acc, cur) => acc + cur.years[0].value, 0)
    const averagePrice = Math.floor(totalPrice / PREF_CODES.length)

    return NextResponse.json({ year: year, displayType: displayTypeLabel?.label, price: averagePrice })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: error })
  }
}
