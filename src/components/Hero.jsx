import { styled } from "styled-components"
import Tree3d from "./Tree3d"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



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
justify-content: space-between;
@media (max-width: 1400px) {
    width: 90vw;
  }
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;

const Right = styled.div`
flex: 3;
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

const Button = styled.a`
width: 81px;
padding: 10px;
background-color: #0bb63e;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
`;




function Hero() {

  return (
    <Section id="home">
      <Container>
        <Left>
          <Title>Be Different</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Make the difference</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy making the world better.</Desc>
          <Button href="#about">Learn More</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 5, position: [9, 0, 0], }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 2, 1]} />
            <Tree3d position={[0, -0.25, 0]}/>
            <OrbitControls enableZoom={false} autoRotate={true} />
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero