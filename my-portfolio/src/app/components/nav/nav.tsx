import React from 'react';
import './/nav.css';

const Nav: React.FC = () => {
  return (
    <nav className = "nav">
      <input type = "checkbox" id = "nav-checkbox" className = "nav-checkbox"/>
      <label htmlFor="nav-checkbox" className="toggle">
        {/* I have no clue how to fix this or insert the images yet */}
        <img className="menu" src="#" alt="menu" /> 
        <img className="close" src="#" alt="close" />
      </label>
      <ul className = "menu">
        <li>
          <a href = "#">
            <img className = "logo" src="#" alt="Reeha Choudhury Logo"/>
          </a>
        </li>
        <li><a href = "#">Background</a></li>
        <li><a href = "#">Experience</a></li>
        <li><a href = "#">Portfolio</a></li>
        <li><a href = "#">Blog</a></li>
        <li><a href = "#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;