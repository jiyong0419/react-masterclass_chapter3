import styled from "styled-components";

interface ICircle {
  bgColor: string;
}

interface IContainer {
  bgColor: string;
}

const Container = styled.div<IContainer>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor }: ICircle) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
