/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Tractor01 from "../../../images/tractor01.jpg";

const CardItem = () => {
	return (
		<>
			<li className="cards__items">
				<Link className="cards__item__link">
					<figure className="cards__item__pic-wrap">
						<img src={Tractor01} alt="tractor" className="cards__item__img" />
					</figure>
					<div className="cards__item__info">
						<h5 className="cards__item__text">
							tractor project fix lkhlkhlkhlkhlkhlkhfgjfjfj fghfhfhgh ghdfhdcdf
							dhfdhdh dfhdhdh
						</h5>
					</div>
				</Link>
			</li>
		</>
	);
};

export default CardItem;
