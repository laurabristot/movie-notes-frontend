import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 630px;
  display: flex;
  align-items: center;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
  color: ${({theme})=>theme.COLORS.GRAY_100};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    padding: 19px 24px;
    width:100%;
    color: ${({theme})=>theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({theme})=>theme.COLORS.GRAY_200};

    }

  }
  
  >svg{
    margin-left: 16px;
    color: ${({theme})=>theme.COLORS.GRAY_200};
  }
`