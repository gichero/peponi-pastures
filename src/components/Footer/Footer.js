/** @format */

import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../images/tractor-logo.png";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the Adventure newsletter to receive our best vacation deals
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
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div>
						<img src={Logo} alt="logo" />
					</div>
					<small className="website-rights">Peponi Pastures © 2021</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
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
							to="/"
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
