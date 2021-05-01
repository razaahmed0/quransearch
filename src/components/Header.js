import React from "react";
import "./Header.css";
import kalma from "../kalma.svg";

function Header() {
	return (
		<div className="flex bb b--gold bw3 bg-near-white">
			<div className="flex flex-column items-center">
				<img className="w-20 grow" src={kalma} alt="" />
				<h1 className="f1 mt0 hover-yellow link pointer gold">Quran Search</h1>
			</div>
		</div>
	);
}

export default Header;
