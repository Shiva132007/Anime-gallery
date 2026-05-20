import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AnimeDetails() {

  const { id } = useParams()

  const [anime, setAnime] = useState(null)

  useEffect(() => {

    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data)
      })

  }, [id])

  if (!anime) {
    return <h1>Loading...</h1>
  }

  return (

    <div className='details'>

      <img src={anime.images.jpg.image_url} alt='' />

      <div>
        <h1>{anime.title}</h1>
        <p>{anime.synopsis}</p>
        <h3>⭐ {anime.score}</h3>
      </div>

    </div>
  )
}

export default AnimeDetails