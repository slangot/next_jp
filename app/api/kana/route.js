export const GET = async (req) => {
  const kanaList = [
    { character: 'あ', romaji: 'a' },
    { character: 'い', romaji: 'i' },
    { character: 'う', romaji: 'u' },
    { character: 'え', romaji: 'e' },
    { character: 'お', romaji: 'o' },
  ]
  try {
    return new Response(JSON.stringify(kanaList), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}