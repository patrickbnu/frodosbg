import React, { Component } from "react";


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="">

    <Jumbotron fluid className='accordion-inner'>
      <Container>
          A devolução pode ser feita nos seguintes endereços, combinando previamente via whatsapp:<br/>

          <ul>
              <li><Button href="https://goo.gl/maps/bBpa2qbmVn1KEqXG8" target="_blank" size="sm" variant="warning"> localizar</Button> - Bairro Água Verde</li>
              <li><Button href="https://g.page/frodosnest?share" target="_blank" size="sm" variant="warning"> localizar</Button> - Bairro Fortaleza</li>
              <li><Button href="https://goo.gl/maps/cAQ7N45NVAiAi4DB7" target="_blank" size="sm" variant="warning"> localizar</Button> - Bairro Centro</li>
          </ul>

          

          <Button href="https://api.whatsapp.com/send?phone=5547999826190" target="_blank" size="sm" variant="success"> abrir whatsapp </Button>
          
       
      </Container>
    </Jumbotron>
    </div>);
  }
}