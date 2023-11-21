import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({image,title,year,imdbID}) {
  return (
   <div className="d-inline justify-content-center  m-2 " >
     <Link to={`/movie-details/${imdbID}`}>
      <div className='card border border-warning ' >
          
          <img  src={image}style={{height:"33vh",}}/>
          <h3 >{title}</h3>
          <p> {year}</p>
        
      </div>
    </Link>
   </div>
  )
}
