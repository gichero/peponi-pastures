/** @format */

import React from "react";
import PeponiLogo from "../../images/peponi-logo.jpg";
import "./PeponiLogo.css";

const Logo = () => {
	return (
		<div className="peponi-container">
			<h1 className="peponi-title">About Peponi Pastures</h1>
			<div className="peponi-intro">
				<p className="peponi-about">
					Bacon ipsum dolor amet beef ribs landjaeger capicola picanha. Turkey
					chislic ground round, strip steak chicken shoulder picanha leberkas
					kevin tail. Burgdoggen pork belly swine meatloaf kevin. Kevin tail
					beef tenderloin drumstick buffalo shankle venison boudin biltong
					meatloaf burgdoggen alcatra meatball.
				</p>
			</div>
			<div className="peponi-intro">
				<img src={PeponiLogo} alt="logo" className="peponi-logo" />
			</div>
		</div>
	);
};

export default Logo;
