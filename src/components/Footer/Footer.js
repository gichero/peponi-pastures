/** @format */

import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../images/tractor-logo.png";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const faceBookURL = "https://www.facebook.com/peponipastures/";
	const youTubeURL =
		"https://www.youtube.com/channel/UC8qoVmz1TsP_mPp_zWunATw/videos";

	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<div className="footer-subscription-company-info">
					<h3 className="footer-company-info-heading">COMPANY INFO:</h3>
					<h4 className="footer-header-four">Country of Origin: Kenya</h4>

					<h4>Address:</h4>
					<p>
						Peponi Pastures Ltd along Raini Kinungi, rd C67, Maraigushu,
						Naivasha
					</p>
					<h4 className="footer-header-four-pursuing">Pursuing:</h4>
					<p>KEPHIS Organic Farming Certification</p>
					<p>Kenya Dairy Board Certification</p>
				</div>
				<p className="footer-subscription-heading">
					Join the Peponi Pastures newsletter to read about our recent projects
				</p>
				<p className="footer-subscription-text">
					You can unsubscribe at any time.
				</p>
				<div className="input-areas">
					<form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>

						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Videos</h2>
						<Link to="/">Submit Video</Link>
						<Link to="/">Influencer</Link>
					</div>
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to={{ pathname: faceBookURL }} target="_blank">
							Facebook
						</Link>
						<Link to={{ pathname: youTubeURL }} target="_blank">
							Youtube
						</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div onClick={toggleHome} className="social-logo">
						<img src={Logo} alt="logo" />
					</div>
					<small className="website-rights">
						Peponi Pastures © {new Date().getFullYear()}
					</small>

					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to={{ pathname: faceBookURL }}
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f" />
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram" />
						</Link>
						<Link
							className="social-icon-link youtube"
							to={{ pathname: youTubeURL }}
							target="_blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube" />
						</Link>
						<Link
							className="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter" />
						</Link>
						<Link
							className="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
