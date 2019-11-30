import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Process from "./Pages/Process";

const Main = () => (

	<main>
		<Route exact path="/" component={Home} />
		<Route exact path="/process" component={Process} />
	</main>
);

export default Main;