import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BoardTableRow from './BoardTableRow';
import Filter from "./FilterComponent"; 


export default class BoardList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      boards: [],
      original : []
    };

    this.filter = this.filter.bind(this)

  }

  componentDidMount() {
    if (this.state.boards = []) {
      //alert("first time")
    }


    axios.get('https://frodosbg-api-git-master.patrickbnu.vercel.app/api/boards')
      .then(res => {
        //alert(JSON.stringify(res.data))
        this.setState({
          boards: res.data.boards,
          original : res.data.boards
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

  filter(filterState) {

    
    let gameName = filterState.gameName    
    let category = filterState.category
    let onlyAvailable = filterState.onlyAvailable

   
    let fn = function(board) {
        if(onlyAvailable && board.isRented == true){
          return false;
        }

        if("Categoria" != category) {
          if (board.category != category) {
            return false;
          }
        }

        if('' != gameName) {
          if (board.name.toLowerCase().indexOf(gameName.toLowerCase()) == -1) {
            return false;
          }
        }

        return true;
    }
    
    //alert("state" +JSON.stringify(this.state.boards))

    this.setState({
      boards: this.state.original.filter(fn)
    });
  }


  render() {
    return (
    <div className="table-wrapper">
      <Filter filter = {this.filter}></Filter>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th className="text-center">Jogo</th>
            <th className="text-center">Categoria</th>
            <th className="text-center">Disponível</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
  //<th className="text-center">Ação</th>
}