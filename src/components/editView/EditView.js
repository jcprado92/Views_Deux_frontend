import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './EditView.scss'

import { TextField, Button } from '@mui/material';

const API = process.env.REACT_APP_API_URL;

const EditView = () => {

  const { id } = useParams();
  const navigate = useNavigate()

  const [ view, setView ] = useState({
    name: '',
    url: '',
    location: '',
    is_favorite: true
  });

  useEffect(() => {
    axios.get(`${API}/views/${id}`)
    .then(res => setView(res.data.payload))
    .catch(err => console.log(err))
  }, [id])

  //handleTextChange takes what is already in the state
  //spreads it into a new object
  //it then sets the matching keys to the value inputed by the user
  //specifically at that key

  const handleTextChange = (e) => {
    setView({...view, [e.target.id]: e.target.value});
  }

  //edit pic is taking what is in the query for update and using
  //the users input to update said view

  const editView = (updatedView) => {

    axios.put(`${API}/views/${id}`, updatedView)
    .then(() => navigate('/views'))
    .catch((c) => console.warn('catch', c));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editView(view)
  }



  return (
    <div className="edit">
      <div className='editForm'>
      <form onSubmit={handleSubmit} className="edit">
      <h1>Edit View</h1>
        <label htmlFor="name">Name:</label>
        <TextField
          id="name"
          value={view.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          variant='standard'
          required
        />
          <br />
          <br />
        <label htmlFor="url">URL:</label>
        <TextField
          id="url"
          type="text"
          value={view.url}
          placeholder="URL"
          variant='standard'
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="location">Location:</label>
        <TextField
          id="location"
          type="text"
          name="locations"
          value={view.location}
          placeholder="Location"
          variant='standard'
          onChange={handleTextChange}
        />
          <br />
          <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <TextField
          id="is_favorite"
          type="text"
          name="is_favorite"
          value={view.is_favorite}
          placeholder="Favorite?"
          variant='standard'
          onChange={handleTextChange}
        />
        <br />
        <br />
      <Link to={`/views/${id}`}>
        <Button variant='outlined'>Fuhgeddaboudit!</Button>
      </Link>
        <Button type="submit" variant='outlined'>Submit</Button>
      </form>
      </div>
    </div>
  )
}

export default EditView