import React, { Component, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  lineClick,
  incrementAsync, 
  selectCount,
  selectCurrent,
} from '../redux/testSlice';

export function BoardTableRow(props) {

    //console.log(props.obj.registrationDate)

    const year = new Date(props.obj.registrationDate).getFullYear();
    const newGame = year ==2022;

    const dispatch = useDispatch();  
    var className =  (props.obj.isRented) ? 'bg-unavailable ' : ((newGame) ? 'bg-new ': '') ;
    className += (' bg-'+props.obj.category);

    className += (' bg-table-title');

    return (
        <tr className={className} onClick={() => dispatch(lineClick(props.id))}>
            <td className="text-left2">{props.obj.name} </td> 
        </tr>
    );

}
