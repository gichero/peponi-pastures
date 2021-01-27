/** @format */

import React from "react";
import PeponiLogo from "../../images/peponi-logo.jpg";
import "./PeponiLogo.css";

const Logo = () => {
	return (
		<div className="peponi-container">
			<img src={PeponiLogo} alt="logo" className="peponiLogo" />
		</div>
	);
};

export default Logo;
