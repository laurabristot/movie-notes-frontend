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
  margin: 0 auto 60px;

  > main {
    width: 1120px;
    height: 100%;

    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 37px 0;

      button {
        max-width: 207px;
      }
    }
  }

  .cards {
    height: 70vh;
    overflow-y: scroll;
    padding-right: 8px;
  }

  .cards::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  .cards::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }

  .cards::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }
`
