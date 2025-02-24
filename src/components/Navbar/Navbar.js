/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";
import Logo from "../../images/tractor-logo.png";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={Logo} alt="logo" className="logo" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>

						<li className="nav-item">
							<LinkScroll
								className="nav-links"
								onClick={closeMobileMenu}
								to="cards"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Projects
							</LinkScroll>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
