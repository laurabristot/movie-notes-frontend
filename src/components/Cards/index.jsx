import { Container } from "./styles";
import { Tags} from '../Tags'

import ReactStarsRating from 'react-awesome-stars-rating';


export function Cards({data, ...rest} ){
  
  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };
  
  return (
    <Container {...rest}>


      <h1>
        {data.title}
        
      </h1>

      <div className="rating">
        
        <ReactStarsRating onChange={onChange} value={data.rating} isEdit={false} primaryColor="#FF859B" size={15} starGap= {5} />

      </div>
      
      <div className="description">
        {data.description}
      </div>

      
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags title={tag.name} key={tag.id}/>)
          }
        </footer>
      }

    </Container>
  )
}