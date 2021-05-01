import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	let currentPages = [];
	if (currentPage > 4) {
		currentPages = pageNumbers.slice(currentPage - 4, currentPage + 3);
	} else {
		let first = pageNumbers.slice(0, currentPage);
		currentPages = pageNumbers.slice(first[0] - 1, currentPage + 4);
	}

	return (
		<nav>
			<ul className="flex justify-around list">
				<li key={"first"} className="list-item">
					<a href="!#" className="link" onClick={() => paginate(1)}>
						First
					</a>
				</li>
				<li key={"prev"} className="list-item">
					<a
						href="!#"
						className="link"
						onClick={() => {
							currentPage > 1 && paginate(currentPage - 1);
						}}>
						Prev
					</a>
				</li>

				{currentPage > 4 && (
					<>
						<li key={"initial"} className="list-item">
							<a className="link" onClick={() => paginate(1)} href="!#">
								1
							</a>
						</li>
						<li key={"ellipses-prev"} className="list-item">
							<a href="!#" className="link">
								...
							</a>
						</li>
					</>
				)}

				{currentPages.map((number) => (
					<li
						key={number}
						className={
							number === currentPage ? "list-item active" : "list-item"
						}>
						<a className="link" onClick={() => paginate(number)} href="!#">
							{number}
						</a>
					</li>
				))}

				{currentPage < pageNumbers[pageNumbers.length - 4] && (
					<>
						<li key={"ellipses-next"} className="list-item">
							<a href="!#" className="link">
								...
							</a>
						</li>
						<li key={"final"} className="list-item">
							<a
								className="link"
								onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
								href="!#">
								{pageNumbers[pageNumbers.length - 1]}
							</a>
						</li>
					</>
				)}

				<li key={"next"} className="list-item">
					<a
						href="!#"
						className="link"
						onClick={() => {
							currentPage < pageNumbers[pageNumbers.length - 1] &&
								paginate(currentPage + 1);
						}}>
						Next
					</a>
				</li>
				<li key={"last"} className="list-item">
					<a
						href="!#"
						className="link"
						onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}>
						Last
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
