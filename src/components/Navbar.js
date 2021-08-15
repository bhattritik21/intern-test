

import './Navbar.css';
import React from 'react';
import {SidebarData} from './SidebarData'

function Navbar() {
  return (
  <div className="navbar">
    <ul>
    {SidebarData.map((item, index) => {
      return (
        <li key={index} className={item.cName}>
            {item.icon}
        </li>
      );
    })}
    </ul>
  </div>
    
  )
}

export default Navbar