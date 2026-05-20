import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AnimeDetails from "./pages/AnimeDetails"

function App() {
  return (

    <BrowserRouter basename="/Anime-gallery">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App