import React, { Component } from "react";
import axios from 'axios';

export default class GameDetail extends Component {

  constructor(props) {
    super(props)   

    let name = this.props.location.pathname
    const gameName = name.substr(name.lastIndexOf("/")+1, name.length-1);
    this.state = {
        gameName : gameName,
        board : ''
    }
  }


  componentDidMount() {

    axios.get('https://frodosbg-api.vercel.app/api/board?name='+this.state.gameName)
      .then(res => {
        //alert(JSON.stringify(res.data))
        this.setState({
          board: res.data.board
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
    let json = JSON.stringify(this.state.board)
   // const location = useLocation();
    return (<div className="table-wrapper">
      <p> <br />
      Em breve mais detalhes sobre o jogo  
        {this.state.gameName}
        <br/><br/>
      json:   {json}
 
      </p>
    </div>);
  }
}