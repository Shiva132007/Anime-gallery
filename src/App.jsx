import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {

    fetch("https://api.jikan.moe/v4/anime/20/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.data)
      })

  }, [])

  return (
    <div className="container">

      <h1 className="title">Anime Characters</h1>

      <div className="card-container">

        {
          characters.map((item) => (
            <div className="card" key={item.character.mal_id}>

              <img
                src={item.character.images.jpg.image_url}
                alt=""
              />

              <h2>{item.character.name}</h2>

              <p>{item.role}</p>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default App