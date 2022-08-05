import React, { useState,useEffect } from 'react'

export default function () {
const[likes,setLikes]=useState(0)//initial value as argument likes is one variable and 2nd setlikes is method 
useEffect(()=>{
console.log("component Did mount")
},[])//behave like componenetDidMount if [] is blank


useEffect(()=>{
console.log("Compone is update")
},[likes])


useEffect(()=>{
  console.log("i will be called everytime")
})


useEffect(()=>{
  return ()=>console.log("component is unmounting")
})
  return (
   
    <div >
    <button className='btn btn-warning' onClick={() => setLikes(likes + 1)}>Like</button>
     <button className='btn btn-warning' onClick={() => setLikes(likes - 1)}>Unlike</button>
    {likes}
    </div>
    
  )
}
