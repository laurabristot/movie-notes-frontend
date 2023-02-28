import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow-y: hidden;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';
`
export const Content = styled.div`
  grid-area: content;
  width: 1120px;
  margin: 40px auto 0;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 24px;
  }

  > main {
    max-height:75vh;
    padding-right: 8px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      left: -100px;
      width: 8px; /* width of the entire scrollbar */
    }
    
    &::-webkit-scrollbar-track {
      border: solid 3px transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 20px;
    }

    h1 {
      margin-bottom: 24px;
      display: flex;
      gap: 19px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }


    p {
      text-align: justify;
      font-size: 16px;
      line-height: 21px;
    }

    .input{
      display: flex;
      gap: 40px;
      margin-bottom: 20px;
    }
  }
`

export const Section = styled.section`
  >h2{
    margin-top: 20px;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme})=> theme.COLORS.GRAY_200};
    font-weight: 400;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    
  }

`

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  >button{
    height: 56px;
  }

  >button:first-child{
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.PINK};
  }
`