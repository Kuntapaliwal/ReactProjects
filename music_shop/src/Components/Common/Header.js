import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import '../../Styles/Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>Music Shop
      <div >
        <Link to="/">Home</Link> | {" "}
        <Link to="/music">Music</Link>  | {" "}
        <Link to="/about">About</Link>  | {" "}
      </div>
      </div>
    )
  }
}
