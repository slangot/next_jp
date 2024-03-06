"use client"
import {useEffect, useState} from 'react'

const Kanji = () => {

  const [kanji, setKanji] = useState([])
  const [kanjiDetailed, setKanjiDetailed] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchKanjis = async () => {
      const response = await fetch('/api/kanji')
      const data = await response.json()
      setKanji(data)
    }
    fetchKanjis()
  }, [])

  const handleGetKanjiDetailed = async (kanji) => {
    const response = await fetch(`/api/kanji/${kanji.character}`)
    const data = await response.json()
    setKanjiDetailed(data)
    setIsOpen(true)
  }

  const handleClose = () => {
    setKanjiDetailed('')
    setIsOpen(false)
  }

  const KanjiDetailedCard = ({ kanji }) => {
    return (
      <div className='w-28 h-28 mx-5 my-5 bg-purple-600 px-5 py-5 text-center relative'>
        <button className='flex items-center justify-center absolute top-0 right-1 w-6 h-6 border-solid border border-sky-500 rounded-xl' onClick={() => handleClose()}>x</button>
        <h2>{kanji.character}</h2>
        <h3>{kanji.reading}</h3>
        <p>{kanji.meaning}</p>
      </div>
    )
  }

  return (
    <section>
      <h1>Kanji</h1>
      {isOpen && <KanjiDetailedCard kanji={kanjiDetailed} />}
      {kanji.map((kanji, index) => (
        <div key={index} className='w-28 h-28 bg-amber-600 gap-5 px-5 py-5 text-center' onClick={() => handleGetKanjiDetailed(kanji)}>
          <h2>{kanji.character}</h2>
          <p>{kanji.meaning}</p>
        </div>
      ))}
    </section>
  )
}

export default Kanji