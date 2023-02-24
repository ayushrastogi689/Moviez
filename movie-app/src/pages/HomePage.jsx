import React, { useState } from "react";
import "./HomePage_style.css";

import Sidebar2 from "../components/Sidebar2/Sidebar2";
import Navbar from "../components/Navbar/Navbar";
<<<<<<< HEAD

import MovieCard from "../components/MovieCard/MovieCard";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
=======
import MovieApp from "../components/MovieCard/MovieApp";


function HomePage()
{
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>
  {
>>>>>>> 21f5f44a521b707d1daa2076761a292f96cae348
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

<<<<<<< HEAD
  const [movieData, setMovieData] = useState();
  console.log();
=======
>>>>>>> 21f5f44a521b707d1daa2076761a292f96cae348

  return (
    <div className="home_page">
      <Sidebar2 />
<<<<<<< HEAD
      <Navbar isScrolled={isScrolled} />
      <MovieCard />
=======
      <Navbar />
      <div className="container" >
        <MovieApp />
      </div> 
>>>>>>> 21f5f44a521b707d1daa2076761a292f96cae348
    </div>
  );
}

export default HomePage;
