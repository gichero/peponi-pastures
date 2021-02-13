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
		<div className="cards">
			<h1 className="cards__headline">Goat Shed</h1>
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
						<ImageCardItem src={shed01} alt="shed01" />
						<ImageCardItem src={shed02} alt="shed02" />
						<ImageCardItem src={shed03} alt="shed03" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={shed04} alt="shed04" />
						<ImageCardItem src={shed05} alt="shed05" />
						<ImageCardItem src={shed07} alt="shed07" />
					</ul>
					<ul className="cards__items">
						<ImageCardItem src={shed08} alt="shed08" />
						<ImageCardItem src={shed09} alt="shed09" />
						<ImageCardItem src={shed11} alt="shed11" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ShedImageCards;
