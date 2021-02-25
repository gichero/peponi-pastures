/** @format */

import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageCardItem = ({ src, alt, text }) => {
	return (
		<>
			<li className="cards__item-image">
				<div className="cards__item__link-image">
					<Zoom>
						<figure className="cards__item__pic-wrap-image">
							<img
								src={src}
								alt={alt}
								className="cards__item__img-image"
								style={{
									borderRadius: "2px",
									marginBottom: "1em",
								}}
							/>
						</figure>
					</Zoom>
					<div className="image_cards__item__info">
						<h5 className="image_cards__item__text">{text}</h5>
					</div>
				</div>
			</li>
		</>
	);
};

export default ImageCardItem;
