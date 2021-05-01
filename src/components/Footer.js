import React from "react";
import sadja from "../sajda.svg";

function Footer() {
	let images = [];
	for (let i = 0; i < 3; i++) {
		images.push(<img key={i} className="mw4" src={sadja} alt="man praying" />);
	}

	return (
		<footer className="flex flex-column mt3 mb4">
			<div className="flex justify-center">{images}</div>
			<img className="w5 center mt3" src={sadja} alt="man praying" />
		</footer>
	);
}

export default Footer;
