import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Verses from "./components/Verses";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
	const [verses, setVerses] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [versesPerPage] = useState(5);
	const [relevantPages, setRelevantPages] = useState([1, 2, 3, 4, 5]);
	const [totalPages, setTotalPages] = useState([]);

	useEffect(() => {
		const fetchVerses = async () => {
			setLoading(true);
			const res = await axios.get(
				"http://api.alquran.cloud/v1/search/women/all/en"
			);
			setVerses(res.data.data.matches);
			setLoading(false);
		};

		fetchVerses();
	}, []);

	useEffect(() => {
		const calcTotalPages = async () => {
			const totalPages = [];
			for (let i = 1; i < Math.ceil(verses.length / versesPerPage); i++) {
				totalPages.push(i);
			}
			setTotalPages(totalPages);
		};
		calcTotalPages();
	}, [verses, versesPerPage]);

	useEffect(() => {
		let currentPages = [];
		if (currentPage > 4) {
			currentPages = totalPages.slice(currentPage - 3, currentPage + 2);
		} else {
			let first = totalPages.slice(0, currentPage);
			currentPages = totalPages.slice(first[0] - 1, currentPage + 3);
		}
		console.log(currentPages);
		setRelevantPages(currentPages);
	}, [currentPage, totalPages]);

	// *Get current verses
	const indexOfLastVerse = currentPage * versesPerPage;
	const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
	const currentVerses = verses.slice(indexOfFirstVerse, indexOfLastVerse);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="flex flex-column center mw8">
			<Header></Header>
			<Verses verses={currentVerses} loading={loading} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				relevantPages={relevantPages}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
