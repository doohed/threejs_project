import React from 'react'
import { styled } from "styled-components"


const Section = styled.div`
display: flex;
position: fixed;
justify-content: center;
z-index: 2;
left: 50%;
transform: translate(-50%, 0%); 
`;

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

const Logo = styled.img`
height: 50px;
`;

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`;
const ListItem = styled.a`
cursor: pointer;
color: #000000;
text-decoration: none;
`;

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

const Button = styled.a`

padding: 10px;
background-color: #0bb63e;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
`;


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/logo.png"/>
                <List>
                    <ListItem href = "#home">Home</ListItem>
                    <ListItem href = "#about">About</ListItem>
                    <ListItem href = "#works">Works</ListItem>
                    <ListItem href = "#contact">Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Button href = "#contact" >Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar