/** @format */

import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, text, label, path, alt }) => {
	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" to={path}>
					<figure className="cards__item__pic-wrap" data-category={label}>
						<img src={src} alt={alt} className="cards__item__img" />
					</figure>
					<div className="cards__item__info">
						<h5 className="cards__item__text">{text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
};

export default CardItem;
