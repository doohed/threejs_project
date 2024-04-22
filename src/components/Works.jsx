import { styled } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  position: relative;
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
    width: 520px;
    display: inline;
  }
  @media (max-width: 520px) {
    width: 90vw;
    display: inline;
  }
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  @media (max-width: 1400px) {
    width: 60vw;
    height: 60vh;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -100px;
  }

  @media (max-width: 520px) {
    width: 60vw;
    height: 60vh;
    position: absolute;
    top: -100px;
  }
`;

const Bot = styled.div`
  flex: 1;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1400px) {
    
  }
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

const Desc = styled.p``;

const Button = styled.button`
  width: 520px;
  padding: 20px;
  background-color: #82cc73;
  font-size: 14px;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;@media (max-width: 574px) {
    width: 90vw;
  }
`;

function Works() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    console.log(scrolled);
  });

  return (
    <Section id="works">
      <Container>
        <Top>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Top>
        <Bot>
          <Title>We solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>We make the difference</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy making the world better creating a sustainable recycling
            service
          </Desc>
          <Button>Collection and Sorting</Button>
          <Button>Recycling Facility Operation</Button>
          <Button>Material Processing</Button>
          <Button>Quality Control</Button>
          <Button>Partnering with Businesses and Institutions</Button>
        </Bot>
      </Container>
    </Section>
  );
}

export default Works;
