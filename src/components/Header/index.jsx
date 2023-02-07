import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom'

export function Header(){
  return (
  <Container>
    <main>
    <h1>RocketMovies</h1>
    <Input
      placeholder="Pesquisar pelo título"/>

    <Profile>
      <div>
        <strong>Laura Bristot</strong>
        <a href="/">sair</a>
      </div>

      <Link to={"/profile"}>
      <img src="https://github.com/laurabristot.png" alt="" />
      </Link>
    </Profile>

    </main>

  
  </Container>

  )
}