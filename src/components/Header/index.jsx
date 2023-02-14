import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Profile } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header(){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

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
        onClick={handleSignOut}
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