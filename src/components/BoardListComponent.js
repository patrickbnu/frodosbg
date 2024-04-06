import React, { Component, Fragment } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { BoardTableRow } from './BoardTableRow';
import { BoardDetailTableRow } from './BoardDetailTableRow';

import Filter from "./FilterComponent"; 


export default class BoardList extends Component {


  constructor(props) {
    super(props)

    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidRecover)

    this.state = {
      boards: [],
      original : []
    };

    this.filter = this.filter.bind(this)

  }

  componentDidCache = () => {
    console.log("properties cached")
  }

  componentDidRecover = () => {    
    console.log("properties recovered")
  }

  componentDidMount() {
    axios.get( 'https://frodosbg-api.vercel.app'  + '/api/boards')
      .then(res => {
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

    axios.post( 'https://frodosbg-api.vercel.app'  + '/api/filter',{
     
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
        } //FIXME esse floor ai

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
    
    const filtered = this.state.original.filter(fn);
    this.setState({
      boards: filtered
    });

  }


  render() {
    return (
    <div className="table-wrapper">
      <Filter filter = {this.filter}></Filter>

      <br></br>
      <div> 
        <b>Quantidade de Jogos: {this.state.boards.length}</b>
      </div>  
      <br></br>
      <Table  bordered size="sm" >       
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
  


}