import React from 'react'
import logo from "../react.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="img-resp" src={logo} alt="React logo" />
      <h1>ReactFacts</h1>
      <p className="project-info">React Course - Project 1</p>
    </header>
  )
}
