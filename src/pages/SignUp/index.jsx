import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { api } from "../../services/api";

export function SignUp(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  function handleSignUp(){
    if(!email, !name, !password){
      return alert('Preencha todos os campos')
    }


    api.post('/users', {name, email, password})
    .then(()=>{
      alert('Usuário criado com sucesso!')
      navigate(-1)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data)     
      } else {
        alert("Não foi possível cadastrar")
      }
    })


  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          type="text" 
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          />
        
        <Input 
          icon={FiMail}
          type="mail" 
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
          />
        
        <Input 
          icon={FiLock}
          type="password" 
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          />

        <Button
        title="Cadastrar"
        onClick={handleSignUp}/>

        <Link to="/">
          <FiArrowLeft/>
          Voltar para o login
        </Link>
      </Form>

      <Background />


    </Container>
  )
}