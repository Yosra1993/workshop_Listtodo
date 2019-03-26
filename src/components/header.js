import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import {connect} from 'react-redux'
class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            value:""
        })
    }

    handlechange=(event)=>
    {
        this.setState({
            value:event.target.value
        })
    }

    add=()=>
    {  if(!this.state.value)
        return {}
        this.props.addReducertodo(this.state.value)
        this.setState({
            value:''
        })
    }
   
    render() { 
        return ( 
            <div className='header-app form-group'>
      <input type="text" value={this.state.value} onChange={this.handlechange} className="form-control"/>
      <MDBBtn color="primary" onClick={this.add}>Add+</MDBBtn>

            </div>
         );
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        addReducertodo:x=>
        {
            dispatch({
                type:'ADD_TODO',
                newtodo:x//ES6 ==>x:x (x)
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(Header);