import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = (keyword) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=5941fb3&s=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
          setError('');
        } else {
          setMovies([]);
          setError('No movies found for the given search term.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Something Went Wrong! '+ err.message);
        setLoading(false);
      });
  };

  const fetchSeries = (keyword) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=5941fb3&s=${keyword}&type=series`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setSeries(data.Search);
          setError('');
        } else {
          setSeries([]);
          setError('No series found for the given search term.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Something Went Wrong! ' + err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies('2023');
    fetchSeries('2023');
  }, []);

  return (
    <div className='border' >
      <Navbar fetchSeries={fetchSeries} fetchMovies={fetchMovies} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              series={series}
              movies={movies}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/movie-details/:id"
          element={<MovieDetail movies={movies} series={series} />}
        />
      </Routes>
    </div>
  );
}

export default App;
