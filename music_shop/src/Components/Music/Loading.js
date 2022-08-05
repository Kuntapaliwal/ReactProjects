import React, { Component } from 'react'
import {connect} from 'react-redux';
import gif from '../../JSON/images.png'
 class Loading extends Component {
  render() {
    return (
        <div>
        {
            this.props.loading?<img src={gif} alt="loading..........................................." />:null
            //this.props.loading?<div>loading,.............</div>:null
        }
        </div>
      
    )
  }
}
const mapStateToProps=(state)=>
{
  //it will return the props for this particualr component
  return{
    //products:state.preducer//for synchronous
    loading:state.preducer.loading//for saga
  }
}

export default connect(mapStateToProps)(Loading);
