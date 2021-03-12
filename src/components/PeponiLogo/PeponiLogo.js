/** @format */

import React from "react";
import "./PeponiLogo.css";
import peponiLogo from "../../images/peponi-logo.jpg";

const PeponiLogo = ({
	lightBg,
	lightText,
	lightTextDesc,
	headline,
	description,
	alt,
	imgStart,
}) => {
	return (
		<>
			<div
				className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
			>
				<div className="container">
					<div>
						<h1 className={lightText ? "heading" : "heading dark"}>
							{headline}
						</h1>
					</div>
					<div
						className="row home__hero-row"
						style={{
							display: "flex",
							flexDirection: imgStart === "start" ? "row-reverse" : "row",
						}}
					>
						<div className="col">
							<div>
								<img src={peponiLogo} alt={alt} className="home__hero-img" />
							</div>
						</div>
						<div className="col">
							<div className="home__hero-text-wrapper">
								<p
									className={
										lightTextDesc
											? "home__hero-subtitle"
											: "home__hero-subtitle dark"
									}
								>
									{description}
								</p>
							</div>
						</div>

						<div>
							<h2>How are we moving?</h2>
							<p>
								We pride ourselves in quality and a strong ethical culture. Our
								labor comprises 75% women from our locality and youth, we train
								and equip them to work for us and for themselves. We have a
								clear focus of where we are going as a business and this can
								only be done ethically and sustainably. That there, is our
								mantra.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PeponiLogo;
