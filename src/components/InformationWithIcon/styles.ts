import styled from 'styled-components'

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
`

interface ContainerIconProps {
  bgIcon?: string;
}

export const ContainerIcon = styled.span<ContainerIconProps>`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.bgIcon ? props.bgIcon : props.theme['brown-700']};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .25rem;
    margin-right: .25rem;
    color: ${(props) => props.theme['white']};
    border-radius: 100%
`