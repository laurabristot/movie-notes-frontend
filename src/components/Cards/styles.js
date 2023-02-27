import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  /* height: 200px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  cursor: pointer;

  margin: 0 auto 24px;

  border-radius: 16px;

  padding: 32px;

  > h1 {
    color: white;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  
  > footer {
    margin-top: 20px;
  }
 

  .description {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
    line-height: 19px;


    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
  }
`
