import {Container, Content} from './styles'
import {FiPlus} from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Cards } from '../../components/Cards'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Home(){
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
            
            <Cards data={{
              title: "Interestellar",
              tags: [
                {id: 1, name:"Ficção Científica"},
                {id: 2, name:"Drama"},
                {id: 3, name:"Família"}
              ],
              rating: 4,
            }}/>
           
            <Cards data={{
              title: "Interestellar",
              tags: [
                {id: 1, name:"Ficção Científica"},
                {id: 2, name:"Drama"},
                {id: 3, name:"Família"}
              ],
              rating: 4,
            }}/>
           
            <Cards data={{
              title: "Interestellar",
              tags: [
                {id: 1, name:"Ficção Científica"},
                {id: 2, name:"Drama"},
                {id: 3, name:"Família"}
              ],
              rating: 4,
            }}/>
           
            <Cards data={{
              title: "Interestellar",
              tags: [
                {id: 1, name:"Ficção Científica"},
                {id: 2, name:"Drama"},
                {id: 3, name:"Família"}
              ],
              rating: 4,
            }}/>
           
            <Cards data={{
              title: "Interestellar",
              tags: [
                {id: 1, name:"Ficção Científica"},
                {id: 2, name:"Drama"},
                {id: 3, name:"Família"}
              ],
              rating: 4,
            }}/>
           
            

          </div>
        </main>
      </Content>
    
      
    </Container>
)
}