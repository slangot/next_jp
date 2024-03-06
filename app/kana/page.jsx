"use client"
import { useEffect, useState } from 'react'

const Kana = () => {

  const [kana, setKana] = useState([])

  const KanaCard = ({ kana }) => {
    return (
      <div className='w-28 h-28 mx-5 my-5 bg-amber-600 px-5 py-5 text-center'>
        <h2>{kana?.character}</h2>
        <p>{kana?.romaji}</p>
      </div>
    )
  }

  useEffect(() => {
    const fetchKana = async () => {
      const response = await fetch('/api/kana')
      const data = await response.json()
      setKana(data)
    }
    fetchKana()
  }, [])

  return (
    <section>
      {kana.map((kana, index) => (
        <KanaCard key={index} kana={kana} />
      ))}
    </section>
  )
}

export default Kana