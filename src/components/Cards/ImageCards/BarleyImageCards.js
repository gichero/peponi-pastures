/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import barley01 from "../../../images/Barley/barley01.jpg";
import barley02 from "../../../images/Barley/barley02.jpg";
import barley03 from "../../../images/Barley/barley03.jpg";
import barley04 from "../../../images/Barley/barley04.jpg";
import barley05 from "../../../images/Barley/barley05.jpg";
import barley06 from "../../../images/Barley/barley06.jpg";
import barley08 from "../../../images/Barley/barley08.jpg";
import barley09 from "../../../images/Barley/barley09.jpg";
import barley10 from "../../../images/Barley/barley10.jpg";

const BarleyImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Growing Barley</h1>
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
						<ImageCardItem
							src={barley01}
							alt="barley01"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley02}
							alt="barley02"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley03}
							alt="barley03"
							text="venison ham ribeye buffalo"
						/>
					</ul>
					<ul className="cards__items">
						<ImageCardItem
							src={barley04}
							alt="barley04"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley05}
							alt="barley05"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley06}
							alt="barley06"
							text="venison ham ribeye buffalo"
						/>
					</ul>
					<ul className="cards__items">
						<ImageCardItem
							src={barley08}
							alt="barley08"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley09}
							alt="barley09"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={barley10}
							alt="barley10"
							text="venison ham ribeye buffalo"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BarleyImageCards;
