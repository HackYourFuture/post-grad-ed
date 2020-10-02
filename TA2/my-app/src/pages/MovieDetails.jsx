import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

import { useHttpRequest } from '../hooks/Http-request'
import Spinner from '../shared/Spinner'
import ListItem from '../components/ListItem'

import './MovieDetails.css'

export default function MovieDetails () {
  const history = useHistory()
  let match = useRouteMatch()
  const movieId = match.params.id
  const url = `https://swapi.dev/api/films/${movieId}`
  const [loading, err, movie] = useHttpRequest(url)
  const [details, setDetails] = useState()

  const goBack = () => {
    history.goBack()
  }
  useEffect(() => {
    setDetails(movie['characters'])
  }, [movie])

  const handleSelect = e => {
    const selectedVal = e.target.value
    setDetails(movie[selectedVal])
  }
  return (
    <div>
      {err && <h1>Couldn't fetch data</h1>}
      {loading && <Spinner />}
      {movie && (
        <Fade duration={2000}>
          <div className='movie_details movie'>
            <p className='close' onClick={goBack}>
              ✖
            </p>
            <h2 className='title'> {movie.title}</h2>
            <h3>Directed by {movie.director}</h3>
            {movie.producer ? (
              movie.producer.split(', ').length > 1 ? (
                <h3>Producers: {movie.producer}</h3>
              ) : (
                <h3>Producer: {movie.producer}</h3>
              )
            ) : null}
            <div>
              <select className='selectEl' onChange={handleSelect}>
                <option value='characters'>Characters</option>
                <option value='planets'>Planets</option>
                <option value='starships'>Star Ships</option>
                <option value='species'>Species</option>
                <option value='vehicles'>Vehicles</option>
              </select>
              <div
                className={
                  details && details.length < 20 ? 'list' : 'list_long'
                }
              >
                <ul>
                  {details
                    ? details.map((item, i) => (
                        <ListItem key={i} link={item} />
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  )
}
