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
					<div
						className="row home__hero-row"
						style={{
							display: "flex",
							flexDirection: imgStart === "start" ? "row-reverse" : "row",
						}}
					>
						<div className="col">
							<div className="home__hero-text-wrapper">
								<div></div>
								<h1 className={lightText ? "heading" : "heading dark"}>
									{headline}
								</h1>
								<p
									className={
										lightTextDesc
											? "home__hero-subtitle"
											: "home__hero=subtitle dark"
									}
								>
									{description}
								</p>
							</div>
						</div>
						<div className="col">
							<div>
								<img src={peponiLogo} alt={alt} className="home__hero-img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PeponiLogo;
