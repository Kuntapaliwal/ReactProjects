import React from 'react'
import { useCounter } from '../Hooks/UseCounter'
import '../Styles/Header.css'
export default function Counter() {

const [count,increment,decrement,reset]=useCounter()

  return (
    <div className='header'>Counter..........
        <h2>count={count}</h2>
        { '     '}<button className='btn btn-primary' onClick={increment}>increment</button>{ '    '}
        <button className='btn btn-warning' onClick={decrement}>decrement</button>{ '    '}
        <button className='btn btn-primary' onClick={reset}>reset</button>{ '    '}
    </div>
  )
}
