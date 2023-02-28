import { Container, Content, Section, Buttons } from './styles'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { useState } from 'react'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { useEffect } from 'react'

export function EditMovie() {
  const [movie, setMovie] = useState()
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState(movie?.description || '')

  const params = useParams()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await api.get(`/movieNotes/${params.id}`)
        const thisMovie = response.data
        setMovie(thisMovie)
        setDescription(thisMovie.description)
        setRating(thisMovie.rating.toString())
        setTitle(thisMovie.title)
        setTags(thisMovie.tags)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovie()
  }, [params.id])

  function handleAddTag() {
    const newTagObj = {
      name: newTag,
      user_id: movie.user_id,
      note_id: Number(params.id)
    }
    setTags(prevState => [...prevState, newTagObj])
    setNewTag('')
  }
  

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function editNote() {
    if (!title) {
      return alert('Digite o título do filme.')
    }

    if (!rating) {
      return alert('Dê uma nota para o filme.')
    }

    if (tags.length === 0) {
      return alert('Adicione uma Tag')
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar, ou deixe o campo vazio'
      )
    }

    await api.put(`/movieNotes/${params.id}`, {
      title,
      description,
      rating: Number(rating),
      tags: tags
    })
    alert(`Alterações salvas com sucesso`)
    navigate(-1)
  }

  async function deleteMovie(id) {
    try {
      const idToNumber = Number(id)
      await api.delete(`/movieNotes/${idToNumber}`)
    } catch (err) {
      return alert(`Não foi possível deletar a nota devido ao ${err}`)
    }
    navigate('/')
  }


  return (
    <Container>
      <Header />

      <Content>
        <Link to={'/'}>
          <BsArrowLeft />
          Voltar
        </Link>

        <main>
          <h1>Editar Filme</h1>

          <div className="input">
            <Input
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua Nota (de 0 a 5)"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea
            // placeholder={movie?.description}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Section>
            <h2>Marcadores</h2>

            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  value={tag.name}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                placeholder="Novo Marcador"
                isNew
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Buttons>
            <Button title="Excluir Filme" onClick={() =>deleteMovie(params.id)} />
            <Button title="Salvar Alterações" onClick={editNote} />
          </Buttons>
        </main>
      </Content>
    </Container>
  )
}
