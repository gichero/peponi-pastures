/** @format */

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import TractorProject from "./pages/TractorProject";
import Shed from "./pages/Shed";
import Corn from "./pages/Corn";
import Water from "./pages/Water";
import Barley from "./pages/Barley";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tractor" exact component={TractorProject} />
					<Route path="/shed" exact component={Shed} />
					<Route path="/corn" exact component={Corn} />
					<Route path="/water" exact component={Water} />
					<Route path="/barley" exact component={Barley} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
