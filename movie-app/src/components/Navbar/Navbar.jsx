import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import movies from "../../data/moviesData.js";
import MovieCard from "../MovieCard/MovieApp.js";

export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredMovies(
      movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center"></div>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <div>
            <input
              type="text"
              placeholder={"Title, Movies, Keyword"}
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />

    </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: #1f2a3c;
  }
  nav {
    position: sticky;
    top: 0;
    height: 80px;
    width: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
      .search {
        position: absolute;
        width: 567px;
        height: 55px;
        left: 323px;
        top: 10px;
        border-radius: 8px;

        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: #1f2a3c;
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;
