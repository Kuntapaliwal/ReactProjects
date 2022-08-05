import React, { Component } from 'react'

export default class Like extends Component {
    constructor()
    {
        super();
        this.state={
            likes:0,
            name:'Kunta'
        }
    }
incrementLikes()
{
    this.setState(
        {
            likes:this.state.likes+1
        }
    )
}
decrementLikes()
{
    this.setState(
        {
            likes:this.state.likes-1
        }
    )
}
changeName(event)
{
    this.setState({name:event.target.value})
}
  render() {
    return (
      <div>
        
        <input type="text" onChange={(event)=>this.changeName(event)}></input>
        {/* this incrementLikes we should not call directly we have to call it with arrow method otherwise on rendering method it will keep calling increment method and it will give after some time give error */}
        <button className='btn btn-warning' onClick={()=>this.incrementLikes()}>Like</button>
        <button className='btn btn-warning' onClick={()=>this.decrementLikes()}>Unlike</button>
        <span>{this.state.likes}
        {this.state.name}</span>


      </div>
    )
  }
}
