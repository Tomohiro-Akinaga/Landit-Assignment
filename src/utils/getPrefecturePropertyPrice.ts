export default async function getAveragePropertyPrice(year: number, prefCode: number, displayType: number) {
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
}
