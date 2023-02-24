import { Container, Content, Section, Buttons } from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function NewMovie(){
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }


  async function createNewNote(){
    if(!title){
      return alert('Digite o título do filme.')
    }

    if(!rating){
      return alert('Dê uma nota para o filme.')
    }
    
    if(tags.length == 0 ){
      return alert('Adicione uma Tag')
    }

    if (newTag){
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar, ou deixe o campo vazio')
    }

    await api.post('/movieNotes', {
      title,
      description,
      rating: Number(rating),
      tags
    })
    
    navigate(-1)
  }


  return(
    <Container>
      <Header/>

      <Content>
        <Link to={"/"}>
          <BsArrowLeft/>
          Voltar
        </Link>

        <main>
          <h1>Novo Filme</h1>

          <div className="input">
          <Input
            placeholder="Título"
            onChange={e=> setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua Nota (de 0 a 5)"
            onChange={e=> setRating(e.target.value)}
          />
          </div>

          <TextArea
          placeholder="Descrição"
          onChange={e=> setDescription(e.target.value)}
          />
        
        <Section>
          <h2>Marcadores</h2>
          
          <div className="tags">
         
         {
            tags.map((tag , index)=>(
              <NoteItem
              key={index}
              value={tag}
              onClick={()=>handleRemoveTag(tag)}
            />
          ))
         }
          <NoteItem
            placeholder="Novo Marcador"
            isNew
            value={newTag}
            onChange={e=>setNewTag(e.target.value)}
            onClick={handleAddTag}/>
            
          </div>

        </Section>

        <Buttons>
           <Button 
           title="Excluir Filme"
           />
           <Button 
           title="Salvar Alterações"
           onClick={createNewNote}
           />
        </Buttons>
        
        </main>




      </Content>

    </Container>
  )
}