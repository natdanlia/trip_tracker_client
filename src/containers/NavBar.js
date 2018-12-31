import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (



    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
      <NavLink
        className="item"
        to="/trips"
      >
        Trip Tracker
      </NavLink>
      <NavLink
        className="item"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="item"
        to="/trips"
      >
        Trips
      </NavLink>
      <div class="right menu">
      <NavLink
        className="item"
        to="/profile"
      >
        profile
      </NavLink>
      </div>
      </div>
    </div>



  )
}

export default NavBar;
