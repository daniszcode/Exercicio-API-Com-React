import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: chocolate;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: blue;
`;

export const Imagens = styled.img`
  width: 300px;
  height: 300px;
`;

export const Titulo = styled.h1`
  font-family: "Shalimar", cursive;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;
