import React, { useState } from "react";
import "./HomePage_style.css";

import Sidebar2 from "../components/Sidebar2/Sidebar2";
import Navbar from "../components/Navbar/Navbar";

import MovieCard from "../components/MovieCard/MovieCard";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [movieData, setMovieData] = useState();
  console.log();

  return (
    <div className="home_page">
      <Sidebar2 />
      <Navbar isScrolled={isScrolled} />
      <MovieCard />
    </div>
  );
}

export default HomePage;
