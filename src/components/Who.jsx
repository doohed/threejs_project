import { styled } from "styled-components"
import Tree3d from "./Tree3d"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: center;
@media (max-width: 1400px) {
    width: 90vw;
  }
`;

const Center = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;

const Right = styled.div`

display: flex;
position: relative;
`;

const Title = styled.h1`
font-size: 74px;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
color: #a0a0a0;
`;

const Desc = styled.p`

`;

const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #0bb63e;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Tree = styled.img`
width: 800px;
height: 400px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
Center: 0;
right: 0;
margin: auto;
/* animation: animate 20s infinite linear; */
@keyframes animate {
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(359deg);
  }
}
`;

const Tree2 = styled.img`
width: 800px;
height: 400px;
object-fit: contain;
position: absolute;
top: 0;
Center: 0px;
margin: auto;
/* animation: animate 20s infinite linear; */
@keyframes animate {
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(359deg);
  }
}
`;


function Who() {

  return (
    <Section id="about">
      <Container>
        <Center>
          <Title>About us</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>
            With years of experience in the industry, our team is dedicated to delivering efficient and reliable recycling services.
          </Desc>
          <Desc>
            We work closely with businesses, communities, and individuals to create customized recycling programs tailored to their specific needs.
          </Desc>
          <Desc>
            By promoting recycling practices, we aim to conserve natural resources, reduce pollution, and prevent valuable materials from ending up in landfills.
          </Desc>
        </Center>
      </Container>
    </Section>
  )
}

export default Who