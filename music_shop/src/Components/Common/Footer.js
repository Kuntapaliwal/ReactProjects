import React, { Component } from 'react'

export default class Footer extends Component {

  render() {
    
    return (
      <div>Footer
        <h3>I am the footer of your page</h3>
    {/* one bracket to know that it is javascript object because we are in jsx place and one for letting know javascript object */}
    <p style={{color:'red'}} >I am in a bootstrp paragraph</p>
    <button className='btn btn-primary'>Click Me!</button>
    <p>Copyright 2020</p>
      </div>
    )
  }
}
