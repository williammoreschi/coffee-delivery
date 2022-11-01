import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

import IntroCoffee from '../../assets/intro-img.png'

import { InformationWithIcon } from "../../components/InformationWithIcon";

import { IntroContainer, InformationContainer } from "./styles";

export function Home() {
  const theme = useTheme();
  return (
    <IntroContainer>
      <div className="container">
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <InformationContainer>
              <InformationWithIcon
              icon={<ShoppingCart  size={20} weight="fill" />}
              text="Compra simples e segura"
              bgIcon={theme['yellow-700']}
              />
              <InformationWithIcon
              icon={<Package  size={20} weight="fill" />}
              text="Embalagem mantém o café intactos"
              />
              <InformationWithIcon
              icon={<Timer  size={20} weight="fill" />}
              text="Entrega rápida e rastreada"
              bgIcon={theme['yellow-500']}
              />
              <InformationWithIcon
              icon={<Coffee  size={20} weight="fill" />}
              text="O café chega fresquinho até você"
              bgIcon={theme['blue-700']}
              />
          </InformationContainer>
        </section>
        <img src={IntroCoffee} alt="" />
      </div>
    </IntroContainer>
  )
}