import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewDetail.scss'


const API = process.env.REACT_APP_API_URL


function ViewDetail() {

  const [ view, setView ] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  
  useEffect(() =>{

    axios.get(`${API}/views/${id}`)
    .then(res => setView(res.data.payload))
    .catch(err => console.log(err)) 
  }, [id])

  const deleteView = () => {

    axios.delete(`${API}/views/${id}`)
    .then(navigate('/views'))
    .catch(err => console.error(err))
  }

  const handleDelete = () => {
    deleteView()
  }

  const { name, url, location, is_favorite } = view;
  return (
    <div className='viewDetail'>
        <h2>{name}</h2>
        <img src={url}/>
        <h3>{location}</h3>
        <h4>{is_favorite ? "🌊What a View 🌊" : ""}</h4>
        <Link to={`/views/${id}/edit`}><button className='viewDetail__button--onClick'>Edit View</button></Link>
        <button onClick={handleDelete}>Delete This View</button>
        <Link to={`/views`}><button> Nah Nevermind</button></Link>

    </div>
  )
}

export default ViewDetail