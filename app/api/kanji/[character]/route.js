export const GET = async (req, { params }) => {
  const { character } = params
  const kanjiList = [
    { character: '一', meaning: 'one', reading: 'いち' },
    { character: '二', meaning: 'two', reading: 'に' },
    { character: '三', meaning: 'three', reading: 'さん' },
    { character: '四', meaning: 'four', reading: 'し' },
    { character: '五', meaning: 'five', reading: 'ご' }
  ]
  const kanji = kanjiList.find((kanji) => kanji.character === character)
  if (kanji) {
    return new Response(JSON.stringify(kanji), { status: 200 })
  } else {
    return new Response(JSON.stringify({ error: 'Kanji not found' }), { status: 404 })
  }
}