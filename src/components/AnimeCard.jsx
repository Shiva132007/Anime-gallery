import { Link } from 'react-router-dom'

function AnimeCard({ anime }) {

  return (

    <div className='card'>

      <img
        src={anime.images.jpg.image_url}
        alt='anime'
      />

      <h2>{anime.title}</h2>

      <p>⭐ {anime.score}</p>

      <Link to={`/anime/${anime.mal_id}`}>
        <button className='btn'>View Details</button>
        </Link>

    </div>
  )
}

export default AnimeCard