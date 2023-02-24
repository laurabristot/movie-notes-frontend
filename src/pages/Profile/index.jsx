import { Container, Content, Avatar } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

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

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder  
  
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)


  const navigate = useNavigate()

  async function handleBack(){
    navigate(-1)
  }
  
  async function handleUpdate(){
    const updated ={
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
    console.log(user)
  }

  function handleAvatarChange(event){
    const file = event.target.files[0]
    setAvatarFile(file)
    
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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
          src={avatar} 
          alt={`foto do usuário ${name}`} 
        />
        <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
              onChange={handleAvatarChange}
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