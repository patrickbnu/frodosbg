import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BoardTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBoard = this.deleteBoard.bind(this);
    }

    deleteBoard() {
       /* axios.delete('http://localhost:4000/boards/delete-board/' + this.props.obj._id)
            .then((res) => {
                console.log('Board successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })*/
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td> 
                <td>{this.props.obj.category}</td>                           
                <td>{ (this.props.obj.isRented) ? "não" : "sim"}</td>
                <td>
                    <Link className="edit-link" to={"/game/" + this.props.obj.name}>
                        Detalhes
                    </Link>
                    
                </td>
            </tr>
        );
    }
}