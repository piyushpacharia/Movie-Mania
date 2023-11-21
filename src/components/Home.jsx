import React from 'react';
import MovieCard from './MovieCard';
import Slider from 'react-slick';

export default function Home({ movies, series, loading }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024, // screens less than 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
     
      {
        breakpoint: 768, // screens less than 768px wide
        settings: {
          slidesToShow: 0.8 ,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480, // screens less than 480px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
         
        },
      },
    ],
  };

  return (
    <div className='main ' >
      <h1 style={{ color: 'white', textAlign: 'center',fontFamily: 'Racing Sans One' }}>Movies</h1>
      {loading == true ? (
        <h1 style={{ color: 'white' }}>Please Wait we are fetching movies  <div className="spinner-border text-dark" role="status">
  <span className="sr-only"><i className="fa-solid fa-spinner"></i></span>
</div></h1>
      ) : (
        <Slider {...settings}>
          {movies.map((item, index) => (
            <MovieCard imdbID={item.imdbID} image={item.Poster} title={item.Title} year={item.Year} />
          ))}
        </Slider>
      )}

      <h1 className='mt-5' style={{ color: 'white', textAlign: 'center',fontFamily: 'Racing Sans One' }}>Web Series</h1>

      {loading == true ? (
        <h1 style={{ color: 'white' }}>Please Wait we are fetching Web Series  <div className="spinner-border text-dark" role="status">
  <span className="sr-only"><i className="fa-solid fa-spinner"></i></span>
</div></h1>
      ) : (
        <Slider {...settings}>
          {series.map((item, index) => (
            <MovieCard imdbID={item.imdbID} image={item.Poster} title={item.Title} year={item.Year} />
          ))}
        </Slider>
      )}
    </div>
  );
}
