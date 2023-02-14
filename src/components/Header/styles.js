import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;
  height: 116px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  padding: 24px 0;

  
  >main{
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    text-align: end;

    strong {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  img {
    width: 64px;
    height: 64px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 50%;
    object-fit: cover;
  }

`
