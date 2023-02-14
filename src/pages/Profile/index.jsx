import { Container, Content, Avatar } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Profile(){
  const {user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  
  const navigate = useNavigate()

  async function handleBack(){
    navigate(-1)
  }

  async function handleUpdate(){
    const user ={
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user})
  }


  return (
    <Container>
      <header>

      <Link 
        onClick={handleBack}>
        <FiArrowLeft/>
        Voltar
      </Link>

      </header>

      <Content>

        <Avatar>
        <img 
          src={user.avatar} 
          alt={`foto do usuário ${name}`} 
        />
        <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
              // onChange={ handleChangeAvatar }
            />
          </label>
        </Avatar>


        <Input
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}

        />
        <Input
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}

        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdate}
        />

      </Content>

    </Container>
  )
}