import React, { useState } from 'react'
import { useHttpRequest } from '../hooks/Http-request'
import './ListItem.css'
export default function ListItem (props) {
  const [loading, err, data] = useHttpRequest(props.link)
 
  return (
      <li className='list_item'>{data.name} </li>
  )
}
