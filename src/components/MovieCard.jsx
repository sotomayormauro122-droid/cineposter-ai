function MovieCard({ pelicula }) {

  return (
    <div className="movie-card">

      {pelicula.poster ? (
        <img
          src={pelicula.poster}
          alt={pelicula.titulo}
        />
      ) : (
        <p>No hay poster disponible.</p>
      )}


      <h3>{pelicula.titulo}</h3>


      <p>{pelicula.descripcion}</p>


      {pelicula.poster && (

        <a
          className="download-btn"
          href={pelicula.poster}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver poster en alta calidad
        </a>

      )}


    </div>
  )
}

export default MovieCard