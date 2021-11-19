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
  font-family: "Shalimar", cursive;
  font-size: 25pt;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 50px 0;
  background-color: blue;
`;

export const Imagens = styled.img`
  width: 300px;
  height: 300px;
`;
