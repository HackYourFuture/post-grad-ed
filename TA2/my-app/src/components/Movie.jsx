import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

function Movie (props) {
  return (
    <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
      <div className='movie'>
        <h1 className='title'>{props.title}</h1>
        <p>{props.releaseDate} </p>
        <div className='opening_curl'>
          <p>{props.opening}</p>
        </div>
      </div>
    </Link>
  )
}

export default Movie
