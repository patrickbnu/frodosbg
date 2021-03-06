
import React, { Component, useState } from 'react';

//https://www.npmjs.com/package/react-rating-stars-component
import ReactStars from "react-rating-stars-component";

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrent,
} from '../redux/testSlice';


export function BoardDetailTableRow(props) {

    let getCategoryValue = (category) => {
        switch(category) {
            case "Bronze": return "20";
            case "Prata": return "40";
            case "Ouro": return "60";
            case "Diamante": return "80";
        }
    }

    const current = useSelector(selectCurrent);

    let currentRowId = ("detail-" + current)

  

    if(currentRowId != props.id ) {
        return null;
    }
    let detail = props.obj;

    if (!detail.complexityRating) {

        return (
            <tr  className="row-detail">
        
                <td className="text-center" colSpan='3'>  
                    <div className="div-linha">
                        Sem informações ainda
                    </div> 
                </td>
            </tr>)
    }


    let complexityRating = detail.complexityRating ?  detail.complexityRating : 0;

    let minimumAge = detail.minimumAge ? detail.minimumAge : -1;
    let duration = detail.duration ? detail.duration : -1;
    let minPlayers = detail.minPlayers ? detail.minPlayers : -1;
    let maxPlayers = detail.maxPlayers ? detail.maxPlayers : -1;

    let available = !detail.isRented
    let classAvailable = available ? "div-linha" : "div-linha color-red" 
    let textAvailable = available ? "Disponível" : "Indisponível"

    let category = detail.category// + " R$"+getCategoryValue(detail.category);

    return (
        <tr  className="row-detail">
    
            <td className="text-center" colSpan='3'>
                <div className="div-linha">
                    <div><b>Categoria:</b> {category}</div>
                </div>

                <div className="div-linha">
                    <div><b>Jogadores:</b> {minPlayers} a {maxPlayers}</div>
                </div>

                <div className="div-linha">
                    <div><b>Idade mínima:</b> {minimumAge} anos</div>                   
                </div> 

                <div className="div-linha">
                    <div><b>Duração estimada:</b> {duration} minutos</div>
                </div>

                

                <div className="div-linha">
                    <div><b>Complexidade:</b> </div>
                    <ReactStars count={5} value={complexityRating} size={20} edit={false} isHalf={true} activeColor="rgb(230, 84, 84)" color="#000000"/>
                </div> 

                <div className={classAvailable}>
                    <div><b>{textAvailable}</b></div>
                </div>

                
            </td>            
        </tr>
    );

}