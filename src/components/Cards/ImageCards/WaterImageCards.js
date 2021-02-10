/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import water01 from "../../../images/Water/water01.jpg";
import water02 from "../../../images/Water/water02.jpg";
import water03 from "../../../images/Water/water03.jpg";
import water04 from "../../../images/Water/water04.jpg";
import water05 from "../../../images/Water/water05.jpg";
import water06 from "../../../images/Water/water06.jpg";

const WaterImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Water Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={water01} alt="water01" />
						<ImageCardItem src={water02} alt="water02" />
						<ImageCardItem src={water03} alt="water03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={water04} alt="water04" />
						<ImageCardItem src={water05} alt="water05" />
						<ImageCardItem src={water06} alt="water06" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WaterImageCards;
