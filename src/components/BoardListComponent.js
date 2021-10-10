import React, { Component, Fragment } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { BoardTableRow } from './BoardTableRow';
import { BoardDetailTableRow } from './BoardDetailTableRow';

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
    axios.get((process.env.API_URL ?  process.env.API_URL  :  'http://localhost:3001') + '/api/boards')
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
    var index = 0;

    
    return this.state.boards.map((res, i) => {
      //alert(JSON.stringify(res));
      return (
        <Fragment key={"F"+i}>
          <BoardTableRow        obj={res}  id={"id-"+i}        key={"P"+i} /> 
          <BoardDetailTableRow  obj={res}  id={"detail-id-"+i} key={"D"+i} />
        </Fragment> 
      );
    });
  }

  filter(filterState) {
    filterState.date  = new Date().toLocaleString("pt-BR")

    axios.post((process.env.API_URL ?  process.env.API_URL  :  'http://localhost:3001')  + '/api/filter',{
     
        filter : filterState
    })
    .then(resp => {
        //alert(JSON.stringify(resp.data));
    })
    .catch(err => {
        
    });


    
    let gameName = filterState.gameName    
    let category = filterState.category
    let onlyAvailable = filterState.onlyAvailable

    let maxComplexity = filterState.complexityRating;
    let minPlayers = 1;
    let maxPlayers = 1000;

    let maxDuration = 1000;

   
    let fn = function(board) {

       
        if (board.duration > maxDuration) {
          return false;
        }

        
        if ( Math.floor(board.complexityRating)  > maxComplexity) {
          return false;
        }

        if (board.minPlayers < minPlayers) {
          return false;
        }

        if (board.maxPlayers > maxPlayers) {
          return false;
        }


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

      <span> <br></br></span>  

      <Table  bordered size="sm" >       
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
  


}