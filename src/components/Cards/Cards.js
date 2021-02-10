/** @format */

import React from "react";
import "./Cards.css";
import CardItem from "./CardItem/CardItem";
import Tractor01 from "../../images/tractor01.jpg";
import shed from "../../images/Shed/shed.jpg";
import onions from "../../images/onions.jpg";
import corn from "../../images/corn.jpg";
import water from "../../images/water.jpg";
import barley from "../../images/barley.jpg";

const Cards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Recent Projects</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={Tractor01}
							alt="tractor"
							text="Fixing the Tractor"
							label="tractor"
							path="/tractor"
						/>
						<CardItem
							src={shed}
							alt="shed"
							text="goat shed"
							label="shed"
							path="/shed"
						/>
						<CardItem
							src={onions}
							alt="onions"
							text="growing onions"
							label="onions"
							path="/onions"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={water}
							alt="water"
							text="Water irrigation project"
							label="water"
							path="/water"
						/>
						<CardItem
							src={corn}
							alt="corn"
							text="Growing corn"
							label="corn"
							path="/corn"
						/>
						<CardItem
							src={barley}
							alt="barley"
							text="Growing barley"
							label="barley"
							path="/barley"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
