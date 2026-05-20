import { useEffect, useState } from 'react'
import AnimeCard from '../components/AnimeCard'
import SearchBar from '../components/SearchBar'

function Home() {

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('naruto')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.data)
        setLoading(false)
      })
  }, [search])

  return (
    <div className='container'>

      <h1 className='title'>Anime Gallery</h1>

      <SearchBar setSearch={setSearch} />

      {
        loading ? (
          <h2 className='loading'>Loading...</h2>
        ) : (
          <div className='card-container'>
            {
              characters.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))
            }
          </div>
        )
         }

    </div>
  )
}

export default Home