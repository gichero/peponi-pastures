/** @format */

import React from "react";
import "../App.css";
import PeponiLogo from "../components/PeponiLogo/PeponiLogo";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import { PeponiFile } from "./DataFile/Data";

const Home = () => {
	return (
		<>
			<PeponiLogo {...PeponiFile} />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
