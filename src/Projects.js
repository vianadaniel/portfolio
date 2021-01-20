import React from "react"
import styled from "styled-components"

const Container = styled.div`
  overflow: auto;
  white-space: nowrap;
`

const Card = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`
const ImgProject = styled.img`
  height: 150px;
  @media (max-width: 650px) {
    width: 100%;
    height: 200px;
  }
`
const CardContainer = styled.div`
  margin-left: 100px;
  height: 150px;
  width: 400px;
  @media (max-width: 650px) {
    margin-left: 0px;
    width: 100%;
  }
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
    <Container>
      <Card>
        <ImgProject src="photo.gif" alt="Projeto" />
        <CardContainer>
          <p className="projetos">PhotoShare FullStack</p>
          <p className="projeto-text">
            Uma rede social de compartilhamento de fotos, React,
            <br /> Typescript e SQL
          </p>
          <a href="https://youtu.be/CEnqzJq2Vwo">
            <Botao>YouTube</Botao>
          </a>
        </CardContainer>
      </Card>
      <Card>
        <ImgProject src="ecommerce.gif" alt="Projeto" />
        <CardContainer>
          <p className="projetos" style={{ color: "#d97824" }}>
            Rural E-Commerce FullStack
          </p>
          <p className="projeto-text" style={{ color: "#d97824" }}>
            Um E-commerce de produtos rurais, React, Redux (Thunk)
            <br /> Javascript e MongoDb
          </p>
          <Botao style={{ border: "2px solid #d97824", color: "#d97824" }}>
            YouTube
          </Botao>
        </CardContainer>
      </Card>
      <Card>
        <ImgProject src="rappi.gif" alt="Projeto" />
        <CardContainer>
          <p className="projetos" style={{ color: "#8d1c31" }}>
            Rappid4 Front-End
          </p>
          <p className="projeto-text" style={{ color: "#8d1c31" }}>
            Um similiar do iFood com React e um filtro que cria
            <br /> botões de acordo com as categorias
          </p>

          <a href="https://www.youtube.com/watch?v=NI2J9ctOVhc&t=368s">
            <Botao style={{ border: "2px solid #8d1c31", color: "#8d1c31" }}>
              YouTube
            </Botao>
          </a>
        </CardContainer>
      </Card>
    </Container>
  )
}
