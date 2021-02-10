/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import onions01 from "../../../images/Onions/onions01.jpg";
import onions02 from "../../../images/Onions/onions02.jpg";
import onions03 from "../../../images/Onions/onions03.jpg";
import onions04 from "../../../images/Onions/onions04.jpg";
import onions05 from "../../../images/Onions/onions05.jpg";
import onions06 from "../../../images/Onions/onions06.jpg";
import onions07 from "../../../images/Onions/onions07.jpg";
import onions08 from "../../../images/Onions/onions08.jpg";
import onions09 from "../../../images/Onions/onions09.jpg";

const OnionImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Barley Images</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={onions01} alt="onions01" />
						<ImageCardItem src={onions02} alt="onions02" />
						<ImageCardItem src={onions03} alt="onions03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={onions04} alt="onions04" />
						<ImageCardItem src={onions05} alt="onions05" />
						<ImageCardItem src={onions06} alt="onions06" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={onions07} alt="onions07" />
						<ImageCardItem src={onions08} alt="onions08" />
						<ImageCardItem src={onions09} alt="onions09" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default OnionImageCards;
