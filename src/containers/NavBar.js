import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (



    <div class="ui olive inverted massive menu">



      <NavLink
        className="item"
        to="/trips"
      >
        <img src="https://steemitimages.com/640x0/https://cdn.utopian.io/posts/c8bdc11acc6d4b27334bf99e7abec03558a0TTVert.png"/>
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
      <div className="right menu">
      <NavLink
        className="item"
        to="/profile"
      >
        profile
      </NavLink>
      </div>

    </div>



  )
}

export default NavBar;
