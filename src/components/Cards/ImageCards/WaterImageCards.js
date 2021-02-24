/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import water01 from "../../../images/Water/water01.jpg";
import water02 from "../../../images/Water/water02.jpg";
import water03 from "../../../images/Water/water03.jpg";
import water04 from "../../../images/Water/water04.jpg";
import water05 from "../../../images/Water/water05.jpg";
import water06 from "../../../images/Water/water06.jpg";

const WaterImageCards = () => {
	return (
		<div className="cards">
			<h1 className="cards__headline">Water Irrigation Project</h1>
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
							src={water01}
							alt="water01"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={water02}
							alt="water02"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={water03}
							alt="water03"
							text="venison ham ribeye buffalo"
						/>
					</ul>
					<ul className="cards__items">
						<ImageCardItem
							src={water04}
							alt="water04"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={water05}
							alt="water05"
							text="venison ham ribeye buffalo"
						/>
						<ImageCardItem
							src={water06}
							alt="water06"
							text="venison ham ribeye buffalo"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WaterImageCards;
