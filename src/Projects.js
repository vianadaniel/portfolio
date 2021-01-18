import React from "react"
import styled from "styled-components"

const Card = styled.div`
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`
const ImgProject = styled.img`
  height: 150px;
`
const CardContainer = styled.div`
  margin-left: 100px;
  height: 150px;
  width: 400px;
`
const Botao = styled.button`
  border: 2px solid #33a6a6;
  border-radius: 3px;
  color: #33a6a6;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
`

export const Projects = () => {
  return (
    <>
      <Card>
        <ImgProject src="photoshare.png" alt="Projeto" />
        <CardContainer>
          <p className="projetos">PhotoShare FullStack</p>
          <p className="projeto-text">
            Uma rede social de compartilhamento de fotos, React, Typescript e
            SQL
          </p>
          <Botao>
            CODE ON <br />
            <i class="fa fa-github fa-1x" style={{ color: "#33a6a6e" }}></i>
          </Botao>
        </CardContainer>
      </Card>
      <Card>
        <ImgProject src="ecommerce.png" alt="Projeto" />
        <CardContainer>
          <p className="projetos" style={{ color: "#d97824" }}>
            Rural E-Commerce FullStack
          </p>
          <p className="projeto-text" style={{ color: "#d97824" }}>
            Um E-commerce de produtos rurais, React, Redux (Thunk) Javascript e
            MongoDb
          </p>
          <Botao style={{ border: "2px solid #d97824", color: "#d97824" }}>
            CODE ON <br />
            <i class="fa fa-github fa-1x" style={{ color: "#d97824" }}></i>
          </Botao>
        </CardContainer>
      </Card>
      <Card>
        <ImgProject src="Rappid4.png" alt="Projeto" />
        <CardContainer>
          <p className="projetos" style={{ color: "#8d1c31" }}>
            Rappid4 Front-End
          </p>
          <p className="projeto-text" style={{ color: "#8d1c31" }}>
            Um similiar do iFood com React e um filtro que cria botões de acordo
            com as categorias
          </p>
          <Botao style={{ border: "2px solid #8d1c31", color: "#8d1c31" }}>
            CODE ON <br />
            <i class="fa fa-github fa-1x" style={{ color: "#8d1c31" }}></i>
          </Botao>
        </CardContainer>
      </Card>
    </>
  )
}
