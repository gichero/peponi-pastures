/** @format */

import React from "react";
import "./Cards.css";
import CardItem from "./CardItem/CardItem";
import Tractor01 from "../../images/tractor01.jpg";

const Cards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Recent Projects</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
						<CardItem
							src={Tractor01}
							text="Fixing the Tractor"
							label="tractor"
							path="/projects"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
