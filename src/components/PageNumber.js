import React from "react";


function PageNumber({ number, paginate, active, children }) {
	return (
		<div>
				<a
					href="!#"
					className={`link dim blue hover-gold ${active ? "bb pb1" : ""}`}
					onClick={() => (number ? paginate(number) : "")}>
					{children}
				</a>
		</div>
	);
}

export default PageNumber;
