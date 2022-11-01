import { ReactNode } from "react";
import { ContainerIcon, InformationContainer } from "./styles";

interface InformationWithIconProps {
  icon: ReactNode;
  text: string;
  bgIcon?: string;
}

export function InformationWithIcon({icon,text,bgIcon}:InformationWithIconProps){
  return (
    <InformationContainer>
      <ContainerIcon bgIcon={bgIcon}>{icon}</ContainerIcon>{text}
      </InformationContainer>
  )
}