/* eslint-disable react/prop-types */
function ListOfMovies ({movies}) {
  return (
      <ul>
            {
              movies.map(movie => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.image} alt={movie.title} />
                </li>
              ))
            }
      </ul>
)
}

function NoMoviesResult(){
    return (
      <p>No se encontraron peliculas para esta busqueda</p>
    )
}

export function Movies({movies}){
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}