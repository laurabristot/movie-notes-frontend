import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  
  padding: 16px;

  border-radius: 10px;
  border: none;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:disabled {
    opacity: 0.5;
  }
`
