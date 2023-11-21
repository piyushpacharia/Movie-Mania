import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './image/MovieMania.svg'
export default function Navbar({ fetchMovies, fetchSeries }) {
  const [keyword, setKeyword] = useState("");

  return (
    <nav className="nav " >
      <h3 >MovieMania<img style={{width:"3vw",marginTop:"-5px"}} src={Logo}/></h3>

      <div className="nav-right gap-5">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
       
         <div
                  className="form-inline my-2 my-lg-0 d-flex  "
                  style={{ width: "auto",minWidth:"33vw",float:"right" }}
                >
                  <input
                    className="form-control mr-sm-2"
                    onChange={(e) => setKeyword(e.currentTarget.value)}
                    type="text"
                    placeholder="Search a Movie"
                    aria-label="Search"
                    
                  />
                  <button
                    className="btn  my-2 my-sm-0"
                    type="button"
                    onClick={() => {
                      fetchMovies(keyword);
                      fetchSeries(keyword);
                    }}
                  
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
      </div>
    </nav>
  );
}
