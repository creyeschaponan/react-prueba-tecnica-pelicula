import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
export function useMovies(){
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
      }
    })
    return { movies: mappedMovies }
  }