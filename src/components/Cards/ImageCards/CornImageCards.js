/** @format */

import React from "react";
import "../ImageCards/ImageCards.css";
import ImageCardItem from "../ImageCardItem/ImageCardItem";
import corn01 from "../../../images/Corn/corn01.jpg";
import corn02 from "../../../images/Corn/corn02.jpg";
import corn03 from "../../../images/Corn/corn03.jpg";
import corn04 from "../../../images/Corn/corn04.jpg";
import corn05 from "../../../images/Corn/corn05.jpg";
import corn06 from "../../../images/Corn/corn06.jpg";

const CornImageCards = () => {
	return (
		<>
			<div className="cards">
				<h1 className="cards__headline">Growing Corn</h1>
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
								src={corn01}
								alt="corn01"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={corn02}
								alt="corn02"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={corn03}
								alt="corn03"
								text="venison ham ribeye buffalo"
							/>
						</ul>
						<ul className="cards__items">
							<ImageCardItem
								src={corn04}
								alt="corn04"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={corn05}
								alt="corn05"
								text="venison ham ribeye buffalo"
							/>
							<ImageCardItem
								src={corn06}
								alt="corn06"
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

export default CornImageCards;
