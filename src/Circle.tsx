import { useState } from "react";
import styled from "styled-components";

interface ICircle {
  bgColor: string;
  borderColor?: string;
}

interface IContainer {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<IContainer>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor }: ICircle) {
  const [value, setValue] = useState<string | number>(1);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
