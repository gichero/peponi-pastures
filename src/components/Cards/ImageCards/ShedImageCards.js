/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import shed01 from "../../../images/Shed/shed01.jpg";
import shed02 from "../../../images/Shed/shed02.jpg";
import shed03 from "../../../images/Shed/shed03.jpg";
import shed04 from "../../../images/Shed/shed04.jpg";
import shed05 from "../../../images/Shed/shed05.jpg";
import shed07 from "../../../images/Shed/shed07.jpg";
import shed08 from "../../../images/Shed/shed08.jpg";
import shed09 from "../../../images/Shed/shed09.jpg";
import shed11 from "../../../images/Shed/shed11.jpg";
const ShedImageCards = () => {
	return (
		<>
			<div className="cards">
				<h1 className="cards__headline">Goat Shed</h1>
				<div className="cards__text__wrapper">
					<p className="cards__text">
						Goat milk is highly nutritious and wonderful for the lactose
						intolerant. This is why we are producing more of it and processing
						it. Here is a list of the products you can expect to add to your
						basket soon:{" "}
					</p>
					<ul className="cards__text-ul">
						<li className="cards__list">Goat milk (raw and pasteurized)</li>
						<li className="cards__list">Cheese products</li>
						<li className="cards__list">Yoghurt</li>
						<li className="cards__list">Goat milk soaps and lotions</li>
						<li className="cards__list">Pedigree breeding services</li>
						<li className="cards__list">
							Lucerne hay, Desmodium hay, Sudan grass hay
						</li>
					</ul>

					<p className="cards__text">
						Feel free to move with us through partnerships and deals.
						Ultimately, your satisfaction is ours.
					</p>
				</div>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<ImageCardItem
								src={shed01}
								alt="shed01"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed02}
								alt="shed02"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed03}
								alt="shed03"
								text="venison ham ribeye buffalo"
							/>
						</ul>
						<ul className="cards__items">
							<ImageCardItem
								src={shed04}
								alt="shed04"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed05}
								alt="shed05"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed07}
								alt="shed07"
								text="venison ham ribeye buffalo"
							/>
						</ul>
						<ul className="cards__items">
							<ImageCardItem
								src={shed08}
								alt="shed08"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed09}
								alt="shed09"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={shed11}
								alt="shed11"
								text="venison ham ribeye buffalo"
							/>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<small className="image-website-rights">
					Peponi Pastures © {new Date().getFullYear()}
				</small>
			</div>
		</>
	);
};

export default ShedImageCards;
