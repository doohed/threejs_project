import { styled } from "styled-components"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { events } from "@react-three/fiber";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
position: relative;
justify-content: center;
`;

const Form = styled.form`
top : 50px;
width: 500px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
`;

const Title = styled.h1`
font-size: 74px;
border-radius: 5px;
border: none;
`;

const Input = styled.input`
height: 30px;
width: 500px;
padding: 10px;
border-radius: 5px;
border: none;
background-color: #ebead3;
`;

const TextArea = styled.textarea`
height: 200px;
width: 500px;
padding: 10px;
border-radius: 5px;
border: none;
background-color: #ebead3;
`;

const Button = styled.button`
width: 520px;
padding: 20px;
font-size: large;
background-color: #0bb63e;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Container = styled.div`
height: 90vh;
width: 1400px;
display: flex;
justify-content: center;
`;

//creates a object to handle the parametters of the form

function Contact() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: ''
  })


  const ref = useRef()
  const [success, setSuccess] = useState(null);
  const [val, setVal] = useState(null);

  //updates the value of the parametters
  const handleChange = event => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return { ...prev, [name]: value }
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (details.name == '' || details.message == '' || details.email == '') {

      //set boolean values to the conditional rendering
      setVal(true);
      setSuccess(false);

    } else {
      setVal(false);

      //send the information to the company's email through emailjs
      emailjs.sendForm('service_4k5100h', 'template_vx0agsa', ref.current, 'jgevZiypoXgP6L4fO')
        .then((result) => {
          console.log(result.text);
          setSuccess(true);
        }, (error) => {    
          console.log(error.text);
          setSuccess(false);
          
        });
    }

  }

  //conditional rendering depending on the status of the form
  const renderMessage = () => {
    if (success) {
      return <p>Your message has been sent. We'll get back to you soon :)</p>;
    } else {
      if (val){
        return <p>fill up the requierd information</p>;
      }
    }
  }

  return (
    
    <Section id="contact">
      <Container>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Interested?</Title>
          <Input placeholder="Name" name="name" onChange={handleChange}></Input>
          <Input placeholder="Email" name="email" onChange={handleChange}></Input>
          <TextArea placeholder="Leave us a message" name="message" rows={10} onChange={handleChange}></TextArea>
          <Button type="submit">Contact</Button>
          {renderMessage()}
        </Form>
      </Container>
    </Section>
  )
}

export default Contact