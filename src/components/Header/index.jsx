import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header(){
  const {signOut} = useAuth()

  return (
  <Container>
    <main>
    <h1>RocketMovies</h1>
    <Input
      placeholder="Pesquisar pelo título"/>

    <Profile>
      <div>
        <strong>Laura Bristot</strong>
        <ButtonText
        title="sair"
        onClick={signOut}
        />
      </div>

      <Link to={"/profile"}>
      <img src="https://github.com/laurabristot.png" alt="" />
      </Link>
    </Profile>

    </main>

  
  </Container>

  )
}