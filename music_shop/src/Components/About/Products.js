import React from 'react'
import { useContext } from 'react'
import '../../Styles/Header.css'
import { cxt } from '../../App'
export default function Products() {
  let appCxt=useContext(cxt)
  return (
    <div className='header'>Products{appCxt}</div>
  )
}
