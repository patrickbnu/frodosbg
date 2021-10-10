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

    const dispatch = useDispatch();  
    var className =  (props.obj.isRented) ? 'bg-unavailable ' : ((props.obj.registrationDate) ? 'bg-new ': '') ;
    className += (' bg-'+props.obj.category);

    className += (' bg-table-title');

    return (
        <tr className={className} onClick={() => dispatch(lineClick(props.id))}>
            <td className="text-left2">{props.obj.name} </td> 
        </tr>
    );

}
