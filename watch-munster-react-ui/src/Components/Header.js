import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<NavLink to="#" className="navbar-brand">WatchMunster process</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      	<NavLink to="/" className="nav-link" activeClassName="active">
      		Home <span className="sr-only">(current)</span>
      	</NavLink>
      </li>
      <li className="nav-item">
      	<NavLink to="/process" className="nav-link" activeClassName="active">
      		Start Process <span className="sr-only">(current)</span>
      	</NavLink>      
      </li>
    </ul>
  </div>
</nav>
	</header>
)

export default Header;