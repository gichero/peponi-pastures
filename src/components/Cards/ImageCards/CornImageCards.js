/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import corn01 from "../../../images/Corn/corn01.jpg";
import corn02 from "../../../images/Corn/corn02.jpg";
import corn03 from "../../../images/Corn/corn03.jpg";
import corn04 from "../../../images/Corn/corn04.jpg";
import corn05 from "../../../images/Corn/corn05.jpg";
import corn06 from "../../../images/Corn/corn06.jpg";

const CornImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Corn Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={corn01} alt="corn01" />
						<ImageCardItem src={corn02} alt="corn02" />
						<ImageCardItem src={corn03} alt="corn03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={corn04} alt="corn04" />
						<ImageCardItem src={corn05} alt="corn05" />
						<ImageCardItem src={corn06} alt="corn06" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CornImageCards;
