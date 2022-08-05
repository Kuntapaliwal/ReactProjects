import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MusicItem extends Component {
  render() {
    return (
      <div>
      <div className="card" style={{width:'18rem',float:'left'}}>
        <img src={this.props.item.img} className="card-img-top" alt=' '></img>
         <div className="card-body"></div>
        <h5 className="card-title">{this.props.item.name}</h5>
        <p className="card-text">{this.props.item.description}</p>
        <Link className='btn btn-primary' to={`/enquiry/${this.props.item.name}`}>Enquiry</Link>
      </div>
      
      </div>
    )
  }
}
