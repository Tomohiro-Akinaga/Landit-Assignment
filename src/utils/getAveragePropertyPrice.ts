export default async function getAveragePropertyPrice(year: number, displayType: number) {
  const prefCodes = Array.from({ length: 47 }, (_, i) => i + 1)

  const res = await Promise.all(
    prefCodes.map(async (prefCode) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_RESAS_API_URL}?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${displayType}`,
          { headers: { 'Content-Type': 'application/json', 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY || '' } }
        )

        if (!response.ok) {
          throw new Error(`Error fetching data for prefCode ${prefCode}: ${response.statusText}`)
        }

        const data = await response.json()

        return data.result ? data.result.years[0].value : 0
      } catch (error) {
        console.error(error)
        return { error: error }
      }
    })
  )

  const totalPrice = res.reduce((acc, cur) => acc + cur, 0)

  return Math.floor(totalPrice / 47)
}
