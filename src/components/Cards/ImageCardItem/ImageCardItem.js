/** @format */

import React from "react";

const ImageCardItem = ({ src, alt }) => {
	return (
		<>
			<li className="cards__item">
				<figure className="cards__item__pic-wrap">
					<img src={src} alt={alt} className="cards__item__img" />
				</figure>
			</li>
		</>
	);
};

export default ImageCardItem;
