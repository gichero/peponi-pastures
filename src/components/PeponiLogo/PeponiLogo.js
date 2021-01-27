/** @format */

import React from "react";
import PeponiLogo from "../../images/peponi-logo.jpg";
import "./PeponiLogo.css";

const Logo = () => {
	return (
		<div className="peponi-container">
			<img src={PeponiLogo} alt="logo" className="peponiLogo" />

			<h2>About</h2>
			<p>
				Bacon ipsum dolor amet corned beef strip steak kielbasa, porchetta
				biltong bacon pork chop buffalo turkey salami fatback ham hock. Cupim
				doner venison tri-tip jowl tongue. Ball tip chislic doner boudin flank.
				Capicola swine fatback beef ground round. Capicola cupim jerky chuck
				doner pig frankfurter. Strip steak frankfurter jowl alcatra cow. Pork
				belly chislic swine, ball tip frankfurter porchetta andouille picanha
				tail short loin shoulder sirloin.
			</p>
		</div>
	);
};

export default Logo;
