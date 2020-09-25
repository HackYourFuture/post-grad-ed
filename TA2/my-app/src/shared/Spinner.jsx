import React from 'react'
import './Spinner.css'

export default function Spinner () {
  return (
    <div className='spinner_container'> 
    <div className='spinner_background'>
      <div className='target'>
        <div>
          <img className='spinner_img' src='https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755' />
        </div>
      </div>
    </div>
    </div>
  )
}
