/** @format */

import React from "react";
import "./Cards.css";
import ImageCardItem from "./CardItem/CardItem";
import shed01 from "../../images/shed01.jpg";
import shed02 from "../../images/shed02.jpg";
import shed03 from "../../images/shed03.jpg";
import shed04 from "../../images/shed04.jpg";
import shed05 from "../../images/shed05.jpg";
import shed06 from "../../images/shed06.jpg";

const ImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Shed Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={shed01} alt="shed01" />
						<ImageCardItem src={shed02} alt="shed02" />
						<ImageCardItem src={shed03} alt="shed03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={shed04} alt="shed04" />
						<ImageCardItem src={shed05} alt="shed05" />
						<ImageCardItem src={shed06} alt="shed06" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ImageCards;
