import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "./Header.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
		</div>
	);
};

export default Home;
