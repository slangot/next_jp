export const GET = async (req) => {
  const kanjiList = [
    { character: '一', meaning: 'one', reading: 'いち' },
    { character: '二', meaning: 'two', reading: 'に' },
    { character: '三', meaning: 'three', reading: 'さん' },
    { character: '四', meaning: 'four', reading: 'し' },
    { character: '五', meaning: 'five', reading: 'ご' }
  ]
  try {
    return new Response(JSON.stringify(kanjiList), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}