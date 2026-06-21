function SearchBar({ busqueda, setBusqueda, buscarPelicula }) {

  return (
    <form 
      className="search"
      onSubmit={buscarPelicula}
    >

      <input 
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button>
        Buscar
      </button>

    </form>
  )
}

export default SearchBar