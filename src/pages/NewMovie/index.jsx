import { Container, Content, Section, Buttons } from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function NewMovie(){
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
          />
          <Input
            placeholder="Sua Nota (de 0 a 5)"
          />
          </div>

          <TextArea
          placeholder="Descrição"
          />
        
        <Section>
          <h2>Marcadores</h2>
          
          <div className="tags">
         
          <NoteItem
            placeholder="Drama"/>
          <NoteItem
            placeholder="Novo Marcador"
            isNew={true}/>
            
          </div>

        </Section>

        <Buttons>
           <Button 
           title="Excluir Filme"/>
           <Button 
           title="Salvar Alterações"/>
        </Buttons>
        
        </main>




      </Content>

    </Container>
  )
}