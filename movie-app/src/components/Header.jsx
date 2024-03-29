import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo"></div>
      <button onClick={() => navigate(props.login ? "/login" : "/")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 0 4rem;

  button {
    padding: 0.5rem 1rem;
    background-color: #273244;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
    transition: 0.2s ease-out;
  }

  button:hover {
    background-color: #e50914;
  }
`;
