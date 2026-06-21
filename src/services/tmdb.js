const API_KEY = import.meta.env.VITE_TMDB_KEY

export const obtenerPelicula = async (nombre) => {
  const respuesta = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${nombre}&language=es-ES`
  )

  const datos = await respuesta.json()

  if (!datos.results || datos.results.length === 0) {
    return null
  }

  const pelicula = datos.results[0]

  return {
    titulo: pelicula.title,
    poster: pelicula.poster_path
      ? `https://image.tmdb.org/t/p/original${pelicula.poster_path}`
      : null,
    descripcion: pelicula.overview || "Esta película no tiene descripción disponible."
  }
}