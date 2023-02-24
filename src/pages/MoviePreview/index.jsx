import { Header } from "../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsClock } from "react-icons/bs"

import { Container, Content } from "./styles";
import { Tags } from "../../components/Tags";
import ReactStarsRating from 'react-awesome-stars-rating';
import { useState } from "react";

import { api } from "../../services/api";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";

export function MoviePreview(){
  const {user} = useAuth()
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder 
  
  function handleBack(){
    navigate(-1)
  }
  
  useEffect(()=>{
    async function fetchMovie(){
      const response = await api.get(`/movieNotes/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  },[])

  return (
    <Container>
      <Header/>
      <Content>

        <Link to={"/"}>
          <BsArrowLeft/>
          Voltar
        </Link>

          {
            data && 
            <main>
            <h1>{data.title}

            <ReactStarsRating  value={data.rating} isEdit={false} primaryColor="#FF859B" size={25} starGap={5} />
            </h1>

            <div className="createdBy">
              <img src={avatarUrl} alt="" />
              <p>Por {user.name}</p>
              <BsClock />
              <p> 04/02/2023 às 08:00</p>
            </div>

            <div className="tags">

              {
                data.tags.map(tag => (
                  <Tags 
                  key={tag.id}
                  title={tag.name}/>
                ))
              }
             
              
            </div>

            <p>
              {data.description}
            </p>
          </main>
          }
     


      </Content>
    
    </Container>
  )
}