import React, { useState } from "react";
import "./HomePage_style.css";

import Sidebar2 from "../components/Sidebar2/Sidebar2";
import Navbar from "../components/Navbar/Navbar";
import MovieApp from "../components/MovieCard/MovieApp";


function HomePage()
{
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>
  {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div className="home_page">
      <Sidebar2 />
      
      <div className="container" >
        <MovieApp />
      </div> 
    </div>
  );
}

export default HomePage;
