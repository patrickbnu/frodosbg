import React, { Component } from "react";
import axios from 'axios';

import {  Link } from "react-router-dom";  
import Button from 'react-bootstrap/Button';

import ReactStars from "react-rating-stars-component";

export default class GameDetail extends Component {

  constructor(props) {
    super(props)   

    console.log(this.props.match.params)

    let name = this.props.location.pathname
    const gameURL = name.substr(name.lastIndexOf("/")+1, name.length-1);
    this.state = {
        gameURL : gameURL,
        minimumAge : 0,
        board : {
          isRented: false, 
          category: 'Bronze',
          complexityRating: 0,
          minimumAge: 0,
          duration: 0,
          minPlayers : 0,
          maxPlayers: 0,
          url: '',
          idLudo : '',
          idBGG : ''
        }
    }
  }



  componentDidMount() {

    axios.get('https://frodosbg-api.vercel.app' + '/api/board?url='+this.state.gameURL)
      .then(res => {
        //alert(JSON.stringify(res.data))
        this.setState({
          board: res.data.board[0],
         
        });
      })
      .catch((error) => {

        this.setState({
          board: error.message
        });
        //alert(JSON.stringify(error))
        console.log("ERRRO: " +error);
      })
  }


  render() {
    console.log("State" + JSON.stringify(this.state))

    let json = JSON.stringify(this.state.board)

    let getCategoryValue = (category) => {
          switch(category) {
              case "Bronze": return "20";
              case "Prata": return "40";
              case "Ouro": return "60";
              case "Diamante": return "80";
          }
      }



    let detail = this.state.board;
    if(detail.complexityRating == 0) return (
      <div className="table-wrapper">
         <p> <br />Em breve mais detalhes sobre o jogo  {this.state.gameName}<br/><br/></p>
      </div>
    )
   
    let available = !detail.isRented
    let textAvailable = available ? "Disponível" : "Indisponível"
    let category = detail.category// + " R$"+getCategoryValue(detail.category);

    let complexityRating = detail.complexityRating ?  detail.complexityRating : 0;

    let minimumAge = detail.minimumAge ? detail.minimumAge : -1;
    let duration = detail.duration ? detail.duration : -1;
    let minPlayers = detail.minPlayers ? detail.minPlayers : -1;
    let maxPlayers = detail.maxPlayers ? detail.maxPlayers : -1;

    let ludoLink = "https://ludopedia.com.br"+detail.idLudo;
    let bggLink = "https://boardgamegeek.com"+detail.idBGG;


    let classAvailable = available ? "div-linha-detail color-green" : "div-linha-detail color-red" 
  

  console.log("render, complexityRating: " + complexityRating)

    return (
      <div className="table-wrapper">
        

          <table><tbody>
             <tr>    
                <td className="text-center" colSpan='3'>

                    <div className="div-linha-detail">
                        <div><b>Jogo:</b> {detail.name}</div>
                    </div>
                    <div className="div-linha-detail">
                        <div><b>Categoria:</b> {category}</div>
                    </div>

                    <div className="div-linha-detail">
                        <div><b>Jogadores:</b> {minPlayers} a {maxPlayers}</div>
                    </div>

                    <div className="div-linha-detail">
                        <div><b>Idade mínima:</b> {minimumAge} anos</div>                   
                    </div> 

                    <div className="div-linha-detail">
                        <div><b>Duração estimada:</b> {duration} minutos</div>
                    </div>

                    

                    <div className="div-linha-detail">
                        <div><b>Complexidade:</b> </div>
                        <ReactStars count={5} value={complexityRating} size={20} edit={false} isHalf={true} activeColor='#B17A16' color='rgb(214 210 181)'/>
                    </div> 

                    <div className={classAvailable}>
                        <div><b>{textAvailable}</b></div>
                    </div>

                    
                </td>            
            </tr></tbody>
          </table>

          <p> 
          <br />
          Mais detalhes nos seguintes sites: <br />

          <Button href={ludoLink} target="_blank" size="sm" variant="info"> Ludopedia </Button>
          <Button href={bggLink} target="_blank" size="sm" variant="info"> BoardGameGeek </Button>
          </p>
          <br/>

         

          <Link className="btn btn-warning btn-sm" role="button" to={"/"} >
                Voltar
          </Link>   
        
    </div>);
  }
}