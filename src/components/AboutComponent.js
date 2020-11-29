import React, { Component } from "react";

export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="table-wrapper">
      <p> <br />
        <a href="https://bit.ly/aluguel-bnu" target="_blank"        >
          Para mais detalhes acesse aqui.
        </a>
        <br />
      </p>
    </div>);
  }
}