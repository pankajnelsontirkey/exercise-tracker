import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <Link to="/" className="navbar-brand">
               Exercise Tracker
            </Link>
            <div className="collapse navbar-collapse">
               <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                     <Link to="/" className="nav-link">
                        Exercises
                     </Link>
                  </li>
                  <li className="navbar-item">
                     <Link to="/exercises/add" className="nav-link">
                        Create Exercise
                     </Link>
                  </li>
                  <li className="navbar-item">
                     <Link to="/users/add" className="nav-link">
                        Create User
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}
