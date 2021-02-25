/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import onions01 from "../../../images/Onions/onions01.jpg";
import onions02 from "../../../images/Onions/onions02.jpg";
import onions03 from "../../../images/Onions/onions03.jpg";
import onions04 from "../../../images/Onions/onions04.jpg";
import onions05 from "../../../images/Onions/onions05.jpg";
import onions06 from "../../../images/Onions/onions06.jpg";
import onions07 from "../../../images/Onions/onions07.jpg";
import onions08 from "../../../images/Onions/onions08.jpg";
import onions09 from "../../../images/Onions/onions09.jpg";

const OnionImageCards = () => {
	return (
		<>
			<div className="cards">
				<h1 className="cards__headline">Growing Onions</h1>
				<div className="cards__text__wrapper">
					<p className="cards__text">
						Bacon ipsum dolor amet leberkas strip steak porchetta short loin.
						Hamburger pork loin brisket t-bone. Alcatra pork spare ribs fatback,
						chicken shankle ham tongue chislic doner ribeye shoulder brisket.
						Salami biltong landjaeger chicken. Meatball beef ribs burgdoggen
						short loin. Buffalo kielbasa landjaeger biltong porchetta ham swine
						venison leberkas short ribs kevin. Shank ribeye prosciutto, rump
						leberkas porchetta chuck. Shoulder rump flank doner turducken
						buffalo. Ball tip corned beef beef cupim chislic sirloin kevin.
						Sirloin strip steak bacon cupim prosciutto alcatra kielbasa. T-bone
						bacon porchetta, tri-tip boudin strip steak filet mignon andouille.
						Kielbasa shankle turkey, chislic ball tip tenderloin ground round
						brisket shoulder. Tri-tip boudin kevin, t-bone pork belly alcatra
						ball tip. Boudin biltong turkey meatloaf kielbasa. Pork belly spare
						ribs pork chop chicken shank cupim salami jowl. Fatback chicken
						chuck pork chop, cupim flank spare ribs sirloin. Jowl andouille
						venison, ham kevin shankle beef ribs landjaeger chislic short ribs
						sirloin filet mignon leberkas. Pork loin shankle pork belly
						landjaeger pancetta ribeye. Pork chop doner jerky pig ball tip
						boudin venison ham ribeye buffalo.
					</p>
				</div>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<ImageCardItem
								src={onions01}
								alt="onions01"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions02}
								alt="onions02"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions03}
								alt="onions03"
								text="venison ham ribeye buffalo"
							/>
						</ul>
						<ul className="cards__items">
							<ImageCardItem
								src={onions04}
								alt="onions04"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions05}
								alt="onions05"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions06}
								alt="onions06"
								text="venison ham ribeye buffalo"
							/>
						</ul>
						<ul className="cards__items">
							<ImageCardItem
								src={onions07}
								alt="onions07"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions08}
								alt="onions08"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={onions09}
								alt="onions09"
								text="venison ham ribeye buffalo"
							/>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<small className="image-website-rights">
					Peponi Pastures © {new Date().getFullYear()}
				</small>
			</div>
		</>
	);
};

export default OnionImageCards;
