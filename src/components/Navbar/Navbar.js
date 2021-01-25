/** @format */

import React from "react";
import { Link } from "react-router-dom";

// import Navbar from ''

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						Peponi <i class="fas fa-tractor"></i>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
