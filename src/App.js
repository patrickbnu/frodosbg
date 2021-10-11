import React from 'react';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import { useEffect, useState } from 'react';
import './App.css';

import BoardList from "./components/BoardListComponent";  
import About from "./components/AboutComponent"; 
import GameDetail from "./components/GameDetailComponent"; 

import logo from './images/logo.png';

function App() {
  const [date, setDate] = useState(null);
  
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
   
  }, []);


  return (
      <Router>
     
        <div className="App">
          <header className="App-header">
            <Navbar className="navbar"  fixed="top" expand="lg"  expanded={expanded}> 
              <Container>

                  <Navbar.Brand>
                    <Link to={"/"} className="nav-link">
                      <img width='100%' height={50} alt="" src={logo} />
                    </Link>
                  </Navbar.Brand> 

                  <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} />

                  <Navbar.Collapse  className="justify-content-end ">

                     
                      <Nav >
                        <Link to={"/list"} className="nav-link navbar-right" onClick={() => setExpanded(false)} >
                          Lista Aluguel
                        </Link>
                      </Nav>

                      <Nav>
                        <Link to={{ pathname: "https://loja.frodosbg.com.br/?utm_campaign=site_aluguel&utm_medium=referral&utm_source=SiteAluguel" }} target="_blank"  
                        className="nav-link navbar-right" onClick={() => setExpanded(false)}>
                      
                          Loja 
                        </Link>
                      </Nav>                 

                      <Nav >
                        <Link to={"/about"} className="nav-link navbar-right" onClick={() => setExpanded(false)}>
                          Sobre
                        </Link>
                      </Nav>
                   
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>

      

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <CacheSwitch>
                    <CacheRoute when="always" exact path='/' component={BoardList} />
                        <Route  path="/about" component={About} />
                        <CacheRoute when="always" path="/list" component={BoardList} />
                        <Route path="/game" component={GameDetail} /> 
                        <Route path="/store" component={() => { 
                            window.open('https://loja.frodosbg.com.br/?utm_campaign=site_aluguel&utm_medium=referral&utm_source=SiteAluguel', '_blank');
                            return true;
                        }}/>   
                  </CacheSwitch>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </Router>)
      
;


}

export default App;
