import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  
  > header {
    height: 144px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_PINK};;
    
    padding: 0 124px;
    display: flex;
    align-items: center;
   
    
    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
    }
`
export const Content = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
  > button {
    margin-top: 24px;
  }
  `

export const Avatar = styled.div`
position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;
  margin-bottom: 64px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
    object-fit: cover;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    }
  }


  `
