import React from "react";
import kalma from "../kalma.svg";

function Header() {
	return (
		<header className="flex bb b--gold br2 bw2 bg-near-white mt1">
			<div className="flex flex-column items-center">
				<img className="w-20 grow bb b--gold" src={kalma} alt="" />
				<h1 className="f1 mt0 hover-yellow link pointer blue">Quran Search</h1>
			</div>
		</header>
	);
}

export default Header;
