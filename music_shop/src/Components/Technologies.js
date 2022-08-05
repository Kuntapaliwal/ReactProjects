import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch_technologies from '.././Actions/TechnologiesAction'
import '../Styles/Header.css'
export class Technologies extends Component {
    componentDidMount()
    {
        this.props.fetchTechnolgies();
    }
  render() {
    return (
      <div className="header">Technologies<br/>
      {
        this.props.technologies?.length > 0 && this.props.technologies.map((item,index)=><span key={index} >{item} {' | '}</span>)
      
    }  </div>
    )
  }
}

const mapStateToProps = (state) =>
{
    return{
    technologies:state.treducer
  }
}

const mapDispatchToProps = (dispatch)=>
{
    return{
  fetchTechnolgies:()=>dispatch(fetch_technologies())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Technologies)