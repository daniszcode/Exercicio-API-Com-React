import React from "react";
import { Container } from "./style";
import ImagemBrasaoG from "../Assets/grifinoriaBrasao.png";
import ImagemBrasaoS from "../Assets/sonserinaBrasao.png";
import ImagemBrasaoC from "../Assets/corvinalBrasao.png";
import ImagemBrasaoL from "../Assets/lufalufaBrasao.png";
import { Imagens } from "./style";
import { Box } from "./style";
import "./Home.css";

const CardBrasoes = () => {
  return (
    <>
      <Container>
        <Box>
          <p>
            Escolha sua casa e conheça todos os alunos que passaram por ela.
          </p>
          <Imagens
            className="tremedeira"
            src={ImagemBrasaoG}
            alt="Brasão da casa Grifinoria"
          />
          <Imagens
            className="tremedeira"
            src={ImagemBrasaoS}
            alt="Brasão da casa Sonserina"
          />
          <Imagens
            className="tremedeira"
            src={ImagemBrasaoC}
            alt="Brasão da casa Corvinal"
          />
          <Imagens
            className="tremedeira"
            src={ImagemBrasaoL}
            alt="Brasão da casa Lufa-Lufa"
          />
        </Box>
      </Container>
    </>
  );
};

export { CardBrasoes };
