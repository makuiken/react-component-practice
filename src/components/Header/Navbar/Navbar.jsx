import React from 'react';
import Search from './Search/Search';


export default function Navbar(){
  return(
    <nav>
      <ul>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Calendar</a></li>
        <Search />
      </ul>
    </nav>
  );
}