/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import tractor01 from "../../../images/Tractor/tractor01.jpg";
import tractor02 from "../../../images/Tractor/tractor02.jpg";
import tractor03 from "../../../images/Tractor/tractor03.jpg";
import tractor04 from "../../../images/Tractor/tractor04.jpg";

const TractorImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Tractor Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={tractor01} alt="tractor01" />
						<ImageCardItem src={tractor02} alt="tractor02" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={tractor03} alt="tractor03" />
						<ImageCardItem src={tractor04} alt="tractor04" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TractorImageCards;
