import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useHttpRequest } from '../hooks/Http-request'


import Movie from '../components/Movie'

export default function MovieDetails (props) {
  let match = useRouteMatch()
  const movieId = match.params.id
  const url = `https://swapi.dev/api/films/${movieId}`
  const [loading, err, movie] = useHttpRequest(url); 
  console.log(movie);
  
  return (
    <div>
      {movie && 
      <div>
      <h1>{movie.title}</h1>
      </div>
      }
    </div>
  )
}
