import styled from 'styled-components'

import BackgroundImg from '../../assets/intro-background.png';

export const IntroContainer = styled.section`
  width: 100%;
  display: flex;
  background: ${(props) => `url(${BackgroundImg}) center center / cover no-repeat`};

  div.container {
    display: flex;
    padding: 2rem 2.5rem;
    gap: 2rem;
    width: 100%;
    max-width: 74rem;
    margin: 0 auto;

    h1{
      font-size: 3rem;
      font-family: 'Baloo 2', cursive;
      font-weight: bold;
      line-height: 3.5rem;
      margin-bottom: 1.5rem;
      color: ${(props) => props.theme['brown-700']}
    }

    h2{
      color: ${(props) => props.theme['brown-500']};
      font-weight: 400;
      margin-bottom: 3rem
    }

    img {max-width:100%;}
  }
`

export const InformationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`