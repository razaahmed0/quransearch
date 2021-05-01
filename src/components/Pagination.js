import React from "react";
import PageNumber from "./PageNumber.js";
// import { v4 as uuidv4 } from "uuid";

function Pagination({ currentPage, totalPages, relevantPages, paginate }) {
	return (
		<div className="flex justify-center list pt3 pb3 br2 mt0 bg-near-white bb bw2 b--gold overflow-hidden">
			<PageNumber paginate={paginate} number={1}>
				First
			</PageNumber>

			<PageNumber
				paginate={paginate}
				number={currentPage > 1 ? currentPage - 1 : null}>
				Prev
			</PageNumber>

			{currentPage > 4 && (
				<>
					<PageNumber paginate={paginate} number={1}>
						1
					</PageNumber>
					<PageNumber paginate={paginate} number={null}>
						...
					</PageNumber>
				</>
			)}

			{relevantPages.map((number) => (
				<PageNumber
					key={number}
					paginate={paginate}
					number={number}
					active={number === currentPage ? true : false}>
					{number}
				</PageNumber>
			))}

			{currentPage < totalPages[totalPages.length - 4] && (
				<>
					<PageNumber paginate={paginate} number={null}>
						...
					</PageNumber>
					<PageNumber
						paginate={paginate}
						number={totalPages[totalPages.length - 1]}>
						{totalPages[totalPages.length - 1]}
					</PageNumber>
				</>
			)}

			<PageNumber
				paginate={paginate}
				number={
					currentPage < totalPages[totalPages.length - 1]
						? currentPage + 1
						: null
				}>
				Next
			</PageNumber>

			<PageNumber
				paginate={paginate}
				number={totalPages[totalPages.length - 1]}>
				Last
			</PageNumber>
		</div>
	);
}

export default Pagination;
