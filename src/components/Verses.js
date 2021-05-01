import React from "react";

function Verses({ verses }) {
	return (
		<ul className="flex flex-column list pa2 bg-near-white br2">
			{verses.map((post, index) => (
				<li
					key={index}
					className="mb3 pt2 pa4 bl bw3 b--dark-green br2 shadow-5 lh-copy grow bg-washed-green">
					{post.text}
				</li>
			))}
		</ul>
	);
}

export default Verses;
