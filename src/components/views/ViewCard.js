import React from 'react'
import { Link } from 'react-router-dom'

import './ViewDetail.scss'

function ViewCard({ view, id }) {

  const { name, location, url } = view;

  return (
    <div className='viewCard'>
      <Link to={`/views/${id}`}><h1>{name}</h1></Link>
      <Link to={`/views/${id}`}><img src={url} className='viewCard__img'/></Link>
      <h3>{location}</h3>
    </div>
  )
}

export default ViewCard