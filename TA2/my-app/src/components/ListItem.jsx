import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import { css } from '@emotion/core'
import { useHttpRequest } from '../hooks/Http-request'

import './ListItem.css'

export default function ListItem (props) {
  const [loading, err, data] = useHttpRequest(props.link)
  const override = css`
    display: in-line;
    margin: 0 auto;
    border-color: white;
  `

  if (loading) {
    return (
      <BeatLoader css={override} size={4} color={'yellow'} loading={loading} />
    )
  } else if (err) {
    return <li className='list_item'>Couldn't reach server</li>
  } else {
    return <li className='list_item'>{data.name}</li>
  }
}
