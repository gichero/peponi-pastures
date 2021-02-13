/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import tractor01 from "../../../images/Tractor/tractor01.jpg";
import tractor02 from "../../../images/Tractor/tractor02.jpg";
import tractor03 from "../../../images/Tractor/tractor03.jpg";
import tractor04 from "../../../images/Tractor/tractor04.jpg";

const TractorImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Fixing the Tractor</h1>
			<div className="cards__text__wrapper">
				<p className="cards__text">
					Bacon ipsum dolor amet leberkas strip steak porchetta short loin.
					Hamburger pork loin brisket t-bone. Alcatra pork spare ribs fatback,
					chicken shankle ham tongue chislic doner ribeye shoulder brisket.
					Salami biltong landjaeger chicken. Meatball beef ribs burgdoggen short
					loin. Buffalo kielbasa landjaeger biltong porchetta ham swine venison
					leberkas short ribs kevin. Shank ribeye prosciutto, rump leberkas
					porchetta chuck. Shoulder rump flank doner turducken buffalo. Ball tip
					corned beef beef cupim chislic sirloin kevin. Sirloin strip steak
					bacon cupim prosciutto alcatra kielbasa. T-bone bacon porchetta,
					tri-tip boudin strip steak filet mignon andouille. Kielbasa shankle
					turkey, chislic ball tip tenderloin ground round brisket shoulder.
					Tri-tip boudin kevin, t-bone pork belly alcatra ball tip. Boudin
					biltong turkey meatloaf kielbasa. Pork belly spare ribs pork chop
					chicken shank cupim salami jowl. Fatback chicken chuck pork chop,
					cupim flank spare ribs sirloin. Jowl andouille venison, ham kevin
					shankle beef ribs landjaeger chislic short ribs sirloin filet mignon
					leberkas. Pork loin shankle pork belly landjaeger pancetta ribeye.
					Pork chop doner jerky pig ball tip boudin venison ham ribeye buffalo.
				</p>
			</div>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<ImageCardItem src={tractor01} alt="tractor01" />
						<ImageCardItem src={tractor02} alt="tractor02" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={tractor03} alt="tractor03" />
						<ImageCardItem src={tractor04} alt="tractor04" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TractorImageCards;
