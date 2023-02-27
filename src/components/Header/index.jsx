import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Container, Profile } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(props){
  const {signOut, user} = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  return (
  <Container>
    <main>
    <h1>RocketMovies</h1>
    <Input
      placeholder="Pesquisar pelo título"
      onChange={props.onChange}
    />

    <Profile>
      <div>
        <strong>{user.name}</strong>
        <ButtonText
        title="sair"
        onClick={handleSignOut}
        />
      </div>

      <Link to={"/profile"}>
      <img src={avatarUrl} alt={`foto do usuário ${user.name}`} />
      </Link>
    </Profile>

    </main>

  
  </Container>

  )
}