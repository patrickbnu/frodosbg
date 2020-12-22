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

    return (
        <tr className={ (props.obj.isRented) ? 'color-red' : ''  } onClick={() => dispatch(lineClick(props.id))}>
            <td className="text-center">{props.obj.name} </td> 
        </tr>
    );

}
