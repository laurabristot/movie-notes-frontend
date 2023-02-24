import {Container, Content} from './styles'
import {FiPlus} from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Cards } from '../../components/Cards'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../services/api'


export function Home(){
   const [movies, setMovies] = useState([])
   const [search, setSearch] = useState()

   const navigate = useNavigate()

   function handleDetails(id){
    navigate(`/details/${id}`)
   }

   useEffect(()=>{
    async function fetchMovies(){
      const response = await api.get(`/movieNotes`)
      setMovies(response.data)
    }
    fetchMovies()
   }, [])
   
  return (
    <Container>
      <Header/>
      <Content>
        <main>
          <header>
            <h2>Meus filmes</h2>
            <Link 
              to={"/newmovie"}
            >
              <Button
                icon={FiPlus}
                title="Adicionar filme"
              />      
            </Link>
          </header>

          <div className="cards">
            
            {
              movies.map(movie => (
                <Cards
                key={String(movie.id)}
                data={movie}
                onClick={()=>handleDetails(movie.id)}
                />
                
              ))

            }
           
            

          </div>
        </main>
      </Content>
    
      
    </Container>
)
}