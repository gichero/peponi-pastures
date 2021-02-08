/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageCardItem = ({ src, alt }) => {
	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" to="#">
					<Zoom>
						<figure className="cards__item__pic-wrap-image">
							<img
								src={src}
								alt={alt}
								className="cards__item__img"
								width="400"
							/>
						</figure>
					</Zoom>
				</Link>
			</li>
		</>
	);
};

export default ImageCardItem;
