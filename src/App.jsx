import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'


function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    //forma controlada por react y validar desde antes
    //en este caso valida que coloque un espacio al principio
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(() => {
    if(query === ''){
      setError('No se puede buscar una película vacía')
      return
    }
    if(query.match(/^\d+$/)){
      setError('No se puede buscar una película con un número')	
      return
    }
    if(query.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" type="text" placeholder='Avengers, Start Wars, The Matrix ...'/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
