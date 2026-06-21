import { useState } from "react"
import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"
import { obtenerPelicula } from "../services/tmdb"

function Home() {
  const [busqueda, setBusqueda] = useState("")
  const [pelicula, setPelicula] = useState(null)
  const [error, setError] = useState("")

  const buscarPelicula = async (e) => {
    e.preventDefault()

    if (busqueda.trim() === "") {
      setError("Debes escribir el nombre de una película.")
      setPelicula(null)
      return
    }

    const resultado = await obtenerPelicula(busqueda)

    if (resultado === null) {
      setError("No se encontró ninguna película.")
      setPelicula(null)
      return
    }

    setError("")
    setPelicula(resultado)
  }

  return (
    <main className="home">
      <h1>Encuentra posters de tus películas favoritas</h1>

      <p>
        Busca, descarga y descubre información con ayuda de IA.
      </p>

      <SearchBar 
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        buscarPelicula={buscarPelicula}
      />

      {error && <p className="error">{error}</p>}

      {pelicula && <MovieCard pelicula={pelicula}/>}
    </main>
  )
}

export default Home