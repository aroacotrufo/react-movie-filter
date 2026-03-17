import { useState } from 'react'



const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
function App() {

  const [genre, setGenre] = useState("")
  const [filter, setFilter] = useState([])


  useEffect(() => {

    if (genre === '') {
      setFilter(films)
    } else {
      setFilter(films.filter(films => films.genre === genre))
    }

  }, [genre])
  return (
    <div className='container py-5'>
      <h1 className="text-center display-4 mb-5">Lista Film</h1>
      <div className='row justify-content-center-mb-5'>
        <label className='form-label fw-bold fs-5 d-block mb-2'>Filtra per Genere:</label>
        <select className='form-select form-select-lg'
          value={genre}
          onChange={e => setGenre(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>
    </div>
  
    <div className = 'row g-4' >
    
      {filter.map((f, i) => (
        <div key={i}
          className='col-lg-6 col-xl-4'>
          <div className='card -body p-4'>
            <h3 className='card-title'>{f.title}</h3>
          </div>
        </div>
      </div>
      ))}

