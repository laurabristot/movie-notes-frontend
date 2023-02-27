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
   const [search, setSearch] = useState("")

   const [tags, setTags] = useState([])
   const [tagsSelected, setTagsSelected] = useState([])

   const navigate = useNavigate()

   function handleDetails(id){
    navigate(`/details/${id}`)
   }

   function handleTagSelected(tagName){
    if(!tagName){
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName)
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleSearch(e){
    setSearch(e.target.value)
  }

   useEffect(()=>{
    async function fetchNotes(){
      const response = await api.get(`/movieNotes?title=${search}&tags=${tagsSelected}`)
      setMovies(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])
   
  return (
    <Container>
      <Header
      onChange={handleSearch}
      />
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