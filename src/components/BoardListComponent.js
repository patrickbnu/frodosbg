import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BoardTableRow from './BoardTableRow';


export default class BoardList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    if (this.state.boards = []) {
      //alert("first time")
    }

    //alert("teste")
    axios.get('https://frodosbg-api-git-master.patrickbnu.vercel.app/api/boards')
      .then(res => {
        //alert(JSON.stringify(res.data))
        this.setState({
          boards: res.data.boards
        });
      })
      .catch((error) => {
        alert(error)
        console.log("ERRRO: " +error);
      })
  }

  DataTable() {
    return this.state.boards.map((res, i) => {
      //alert(JSON.stringify(res));
      return <BoardTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Jogo</th>
            <th>Categoria</th>
            <th>Disponível</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}