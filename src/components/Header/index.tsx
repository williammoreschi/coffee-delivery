import { MapPin, ShoppingCart   } from 'phosphor-react'
import { ButtonLocation, HeaderContainer, ButtonCart } from "./styles";
import logo from '../../assets/coffee-delivery-logo.svg'

export function Header(){
  return (
    <HeaderContainer>
    <img src={logo} alt="" />
    <nav>
      <ButtonLocation>
      <MapPin size={24} weight="fill" />
      Maringá, PR
      </ButtonLocation>
      <ButtonCart>
      <ShoppingCart size={24} weight="fill" />
      </ButtonCart>
    </nav>
    </HeaderContainer>
  )
}