import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"

export default function MovieDetail() {

  let {id} = useParams()

  const [movie,setMovie] = useState(null)

  useEffect(() => {

    fetch(`https://www.omdbapi.com/?apikey=5941fb3&i=${id}`)
    .then( res =>  res.json())
    .then (data =>  setMovie(data))
    .catch(err => alert("Something Went Wrong ! " + err.message))
    
  }, 
  [])

  return (
    <div className='detail mx-5' >
  
    {
      movie  == null ? <h1>Please Wait While we are fetching data
         <div className="spinner-border text-dark" role="status">
  <span className="sr-only"><i className="fa-solid fa-spinner"></i></span>
</div>
      </h1> :
      <div>
      <div>
        <img src={movie.Poster} className='border border-warning'  style={{height:"30vh", width:"auto"}}/>
        <h3 style={{fontFamily: 'Racing Sans One' }} className='p-2'>{movie.Title}</h3>
      </div>

      <div>
        <p>Director: {movie.Director}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Language: {movie.Language}</p>
        <p> Released: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Ratings: {movie.imdbRating}</p>
        <p>Plot: {movie.Plot}</p>
    

      </div>
    </div>

    }
   

    </div>
  )
}
