import React, { Component } from "react";

export default class GameDetail extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="table-wrapper">
      <p> <br />
      Em breve mais detalhes sobre o jogo 
        {this.props.name}
      </p>
    </div>);
  }
}