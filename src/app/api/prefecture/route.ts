import { NextRequest, NextResponse } from 'next/server'
import { DISPLAY_TYPE } from '@/constants/displayType'
import { PREF_CODES } from '@/constants/prefCode'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const year = searchParams.get('year')
  const prefCode = searchParams.get('prefCode')
  const displayType = searchParams.get('displayType')

  try {
    const res = await fetch(
      `${process.env.RESAS_API_URL}?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${displayType}`,
      { headers: { 'content-type': 'application/json', 'X-API-KEY': process.env.RESAS_API_KEY || '' } }
    )
    const data = await res.json()

    const displayTypeLabel = DISPLAY_TYPE.find((v) => {
      if (v.value === displayType) return v.label
    })
    const prefecture = PREF_CODES.find((v) => v.code === prefCode)

    return NextResponse.json({
      year: year,
      prefecture: prefecture?.name,
      displayType: displayTypeLabel?.label,
      price: data.result.years[0].value,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: error })
  }
}
