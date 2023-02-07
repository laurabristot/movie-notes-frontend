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
    height:75vh;
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

    .createdBy {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 16px;
      line-height: 19px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    img {
      height: 16px;
      width: 16px;
      border-radius: 50%;
    }

    .tags {
      margin: 40px 0;
    }

    p {
      text-align: justify;
      font-size: 16px;
      line-height: 21px;
    }
  }
`
