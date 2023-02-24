import React from "react";
import "./sidebar2_style.css";
import image from "../../assets/image.png";

const Sidebar2 = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src={image} alt="User Avatar" />
        <h3>Ayush Rastogi</h3>
      </div>
      <div className="vector1"></div>
      <ul className="sidebar-nav">
        <li>
          <i className="icon icon-search" />
          Discover
        </li>
        <li>
          <i className="icon icon-playlist" />
          Playlist
        </li>
        <li>
          <i className="icon icon-movie" />
          Movie
        </li>
        <li>
          <i className="icon icon-tv-show" />
          TV Shows
        </li>
        <li>
          <i className="icon icon-my-list" />
          My List
        </li>
        <div className="vector2"></div>
        <li>
          <i className="icon icon-watch-later" />
          Watch Later
        </li>
        <li>
          <i className="icon icon-recommended" />
          Recommended
        </li>
        <div className="vector3"></div>
        <li>
          <i className="icon icon-settings" />
          Settings
        </li>
        <li>
          <i className="icon icon-logout" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
