import React from "react";

function Pagination({ currentPage, totalPages, relevantPages, paginate }) {
	return (
		<nav>
			<ul className="flex justify-around list pa0">
				<li key={"first"}>
					<a
						href="!#"
						className="link dim blue hover-gold"
						onClick={() => paginate(1)}>
						First
					</a>
				</li>
				<li key={"prev"}>
					<a
						href="!#"
						className="link dim blue hover-gold"
						onClick={() => {
							currentPage > 1 && paginate(currentPage - 1);
						}}>
						Prev
					</a>
				</li>

				{currentPage > 4 && (
					<>
						<li key={"initial"}>
							<a
								className="link dim blue hover-gold"
								onClick={() => paginate(1)}
								href="!#">
								1
							</a>
						</li>
						<li key={"ellipses-prev"}>
							<a href="!#" className="link dim blue hover-gold">
								...
							</a>
						</li>
					</>
				)}

				{relevantPages.map((number) => (
					<li key={number} className={number === currentPage ? "bb pb1" : ""}>
						<a
							className="link dim blue hover-gold"
							onClick={() => paginate(number)}
							href="!#">
							{number}
						</a>
					</li>
				))}

				{currentPage < totalPages[totalPages.length - 4] && (
					<>
						<li key={"ellipses-next"}>
							<a href="!#" className="link dim blue hover-gold">
								...
							</a>
						</li>
						<li key={"final"}>
							<a
								className="link dim blue hover-gold"
								onClick={() => paginate(totalPages[totalPages.length - 1])}
								href="!#">
								{totalPages[totalPages.length - 1]}
							</a>
						</li>
					</>
				)}

				<li key={"next"}>
					<a
						href="!#"
						className="link dim blue hover-gold"
						onClick={() => {
							currentPage < totalPages[totalPages.length - 1] &&
								paginate(currentPage + 1);
						}}>
						Next
					</a>
				</li>
				<li key={"last"}>
					<a
						href="!#"
						className="link dim blue hover-gold"
						onClick={() => paginate(totalPages[totalPages.length - 1])}>
						Last
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
