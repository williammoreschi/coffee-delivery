import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 74rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  nav {
    display: flex;
    gap: 0.8rem
  }
`
const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border:none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.25s;
`

export const ButtonLocation = styled(BaseButton)`
  background-color: ${(props) => props.theme['blue-100']};
  color: ${(props) => props.theme['blue-700']};
  
  &:hover{
    background-color: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme['blue-100']};
  }
`

export const ButtonCart = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  
  &:hover{
    background-color: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['yellow-100']};
  }
`