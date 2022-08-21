import React from 'react';
import {Link}from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode}`}>
    <div className="container-fluid">
      <Link to="/"className="navbar-brand">{props.title}</Link>
      <li>
        <Link to="/">Home</Link>
        </li>
      <li>
        <Link to='/about'>{props.aboutText} </Link>
      </li>
      <li>
        <Link to="/NumberTest">NumberTest</Link>
      </li>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
      {props.text}
    </label>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}
Navbar.defaultProps={
    title:'new app',
    aboutText:'about'
}