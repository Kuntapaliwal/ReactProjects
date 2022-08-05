import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Header.css'
export default class About extends Component {
  render() {
    return (
      <div className='header'>About is hereeeeeee{' '}
        <Link to="/about/us">Us</Link> |{' '}<Link to="/about/products">Products</Link>
      </div>
    )
  }
}
