import React, { Component } from 'react';
import {connect} from 'react-redux'
import { MDBBtn } from "mdbreact";


function Itemlisttodo({itemtodo,removeReducertodo,id,toggleReducertodo})
{
    return (
        <div className='itemtodo-app'>
        <ul>
                 <li>
                     <span onClick={()=>toggleReducertodo(id)}
                     style={{textDecoration:itemtodo.isDone?"line-through":"none"}}>{itemtodo.todo}</span>
                     <MDBBtn color="secondary" onClick={()=>removeReducertodo(id)}style={{marginLeft:'5%'}}>remove</MDBBtn>
                 </li>
             </ul>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        removeReducertodo:id=>
        {
            dispatch({
                type:'REMOVE_TODO',
                id
            })
        },
        toggleReducertodo:cin=>
        {
            dispatch({
                type:'TOGGLE_TODO',
                cin
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Itemlisttodo)