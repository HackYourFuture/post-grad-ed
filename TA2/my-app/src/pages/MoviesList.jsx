import React, { useState } from 'react'
import { useHttpRequest } from '../hooks/Http-request'
import { Fade } from 'react-awesome-reveal'

import Spinner from '../shared/Spinner'
import Movie from '../components/Movie'
import './MovieList.css'

export default function MoviesList () {
  const url = 'https://swapi.dev/api/films/'
  const [loading, err, data] = useHttpRequest(url)
  const [movieNum, setMovieNum] = useState(0)
  const [spinnerLoaded, setSpinnerLoaded] = useState(true)

  setTimeout(() => {
    setSpinnerLoaded(loading)
  }, 2500)

  const clickRight = () => {
    movieNum < 5 ? setMovieNum(movieNum + 1) : setMovieNum(0)
  }
  const clickLeft = () => {
    movieNum > 0 ? setMovieNum(movieNum - 1) : setMovieNum(5)
  }
  const movies = data.results
  const movie = movies ? movies[movieNum] : null

  return (
    <div>
      {err && <h1> Couldn't fetch data</h1>}
      {spinnerLoaded && <Spinner />}
      {!spinnerLoaded && (
        <div className='container'>
          <p className='button button_left' onClick={clickLeft}>
            &lt;
          </p>
          <Fade duration={2000}>
            <Movie
              id={movieNum + 1}
              key={movie.episode_id}
              title={movie.title}
              opening={movie.opening_crawl}
              releaseDate={movie.release_date}
            />
          </Fade>
          <p className='button button_right' onClick={clickRight}>
            &gt;
          </p>
        </div>
      )}
    </div>
  )
}
