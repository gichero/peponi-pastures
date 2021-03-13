/** @format */

import React from "react";
import "../App.css";
import PeponiLogo from "../components/PeponiLogo/PeponiLogo";
import { PeponiFile } from "./DataFile/Data";
import Mission from "../components/Mission/Mission";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<>
			<PeponiLogo {...PeponiFile} />
			<Mission />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
