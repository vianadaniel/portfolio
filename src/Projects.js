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
  border: 1px solid black;
`
export const Projects = () => {
  return (
    <>
      <Card>
        <ImgProject src="photoshare.png" alt="Projeto" />
        <CardContainer></CardContainer>
      </Card>
      <Card>
        <ImgProject src="ecommerce.png" alt="Projeto" />
        <CardContainer></CardContainer>
      </Card>
      <Card>
        <ImgProject src="Rappid4.png" alt="Projeto" />
        <CardContainer></CardContainer>
      </Card>
    </>
  )
}
