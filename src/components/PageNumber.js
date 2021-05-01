import React from "react";

function PageNumber({ number, paginate, active, children }) {
	return (
		<div
			className={`dim blue hover-gold pointer pl2 pr2 ${
				active ? "bb pb1" : ""
			}`}
			onClick={() => (number ? paginate(number) : "")}>
			{children}
		</div>
	);
}

export default PageNumber;
