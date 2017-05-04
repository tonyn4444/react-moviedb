import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="nav navbar-default custom-nav">
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="#" className="navbar-brand nav-links">React MovieDB</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
        			<li><Link to="/" className="nav-links">Home</Link></li>
        			<li><Link to="/" className="nav-links" href="#">Popular</Link></li>
        			<li><Link to="/explore" className="nav-links" href="#">Explore</Link></li>
            </ul>
					</div>
				</div>
			</nav>	
		)			
	}	
}

export default Navbar;
