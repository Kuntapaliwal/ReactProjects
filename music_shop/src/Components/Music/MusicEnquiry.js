
import React from 'react'
import { useParams } from 'react-router-dom'
export default function MusicEnquiry() {
const {iName}= useParams()//hooks for functional component which go to the address bar and take keys from there and return it

  return (
    <div>Did you enquire about{iName}?</div>
  )
}
