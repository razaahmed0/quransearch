import React from "react";

function PageNumber({ number, paginate, active, children }) {
	return (
		<div
			className={`text-center dim blue hover-gold pointer pa2 ${
				active ? "bb f3 pt0" : ""
			}`}
			onClick={() => (number ? paginate(number) : "")}>
			{children}
		</div>
	);
}

export default PageNumber;
