import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Navbar from "./components/Navbar"



const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
background: url(./img/bg.jpg);
scrollbar-width: none;
color: #000000;

&::-webkit-scrollbar{
  display: none;
}
`

function App() {

  return (
    <Container>
      <Navbar/>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
