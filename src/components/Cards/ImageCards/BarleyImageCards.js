/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import barley01 from "../../../images/Barley/barley01.jpg";
import barley02 from "../../../images/Barley/barley02.jpg";
import barley03 from "../../../images/Barley/barley03.jpg";
import barley04 from "../../../images/Barley/barley04.jpg";
import barley05 from "../../../images/Barley/barley05.jpg";
import barley06 from "../../../images/Barley/barley06.jpg";
import barley08 from "../../../images/Barley/barley08.jpg";
import barley09 from "../../../images/Barley/barley09.jpg";
import barley10 from "../../../images/Barley/barley10.jpg";

const BarleyImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Barley Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={barley01} alt="barley01" />
						<ImageCardItem src={barley02} alt="barley02" />
						<ImageCardItem src={barley03} alt="barley03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={barley04} alt="barley04" />
						<ImageCardItem src={barley05} alt="barley05" />
						<ImageCardItem src={barley06} alt="barley06" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={barley08} alt="barley08" />
						<ImageCardItem src={barley09} alt="barley09" />
						<ImageCardItem src={barley10} alt="barley10" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BarleyImageCards;
