import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="">
    <Jumbotron fluid className='accordion-inner'>
          <Container>
            <h3>Em construção! </h3>
            <p>
               Entre em contato para mais informações.        
            </p>
            <Button href="https://api.whatsapp.com/send?phone=5547999826190" target="_blank" size="sm" variant="success"> abrir whatsapp </Button>
          
            
          </Container>
        </Jumbotron>
             
    </div>);
  }
}