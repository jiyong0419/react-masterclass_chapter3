import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setValue(value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`hello ${value}`);
  }

  const Background = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <Background>
      Background text Color
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" borderColor="yellow" />
    </Background>
  );
}

export default App;
