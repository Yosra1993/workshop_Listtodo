import React, { Component } from 'react';
import {connect} from 'react-redux'
import Itemlisttodo from './itemtodo';


class Listtodo extends Component {
   
    
    render() { 
        console.log(this.props.tabtodo)
        const {tabtodo}=this.props
        return ( 
            <div className='listtodo-app'>
             {
                 tabtodo.map((el,index)=>
                <Itemlisttodo key={index}  itemtodo={el} id={index}/>
            )
             }
            </div>
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        tabtodo:state.reducer
    }
}
 
export default connect(mapStateToProps)(Listtodo);