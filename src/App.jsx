import { useState } from 'react'



 const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
    function App()
    
    const [genre, setGenre] = useState("")
    const [filter, setFilter] = useState([])


    useEffect(() => {
      
            if(genre=== ''){
              setFilter(films)
            }else{
              setFilter(films.filter(films => films.genre=== genre))
            }

    },[genre])
    return(
      
    )

export default App
