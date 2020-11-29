import React from 'react';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import './App.css';

import BoardList from "./components/BoardListComponent";  
import About from "./components/AboutComponent"; 
import GameDetail from "./components/GameDetailComponent"; 

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    /**async function getDate() { 
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();*/
  }, []);
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Frodo's Board Games
              </Link>
            </Navbar.Brand> 

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/list"} className="nav-link">
                  Lista de Jogos
                </Link>
              </Nav>              

              <Nav>
                <Link to={"/about"} className="nav-link">
                  Sobre
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={BoardList} />
                <Route path="/about" component={About} />
                <Route path="/list" component={BoardList} />
                <Route path="/game" component={GameDetail} /> 
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);

/** 
  return (
    <main>
      <h3>Aluguel de Jogos de Tabuleiro</h3>

      <p>
        <a href="https://bit.ly/aluguel-bnu" target="_blank"        >
          Para mais detalhes acesse aqui.
        </a>
        <br />
        <h5> Lista de Jogos abaixo</h5>
      </p>
      <BoardList/>
      
    </main>
  );*/
}

export default App;
