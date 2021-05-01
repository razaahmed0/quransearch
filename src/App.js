import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Verses from "./components/Verses";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
	const [input, setInput] = useState("");
	const [verses, setVerses] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [versesPerPage] = useState(5);
	const [relevantPages, setRelevantPages] = useState([1, 2, 3, 4, 5]);
	const [totalPages, setTotalPages] = useState([]);

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
		let relevantPages = [];
		if (currentPage > 4) {
			relevantPages = totalPages.slice(currentPage - 4, currentPage + 3);
		} else {
			let first = totalPages.slice(0, currentPage);
			relevantPages = totalPages.slice(first[0] - 1, currentPage + 3);
		}
		setRelevantPages(relevantPages);
	}, [currentPage, totalPages]);

	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	const onSubmit = () => {
		const fetchVerses = async () => {
			setVerses([]);
			setLoaded(false);
			setLoading(true);

			const url = `http://api.alquran.cloud/v1/search/${input}/all/en.hilali`;
			const res = await axios.get(url);
			if (res.status === 200) {
				setVerses(res.data.data.matches);
			}

			setLoaded(true);
			setLoading(false);
		};

		fetchVerses();
	};

	const indexOfLastVerse = currentPage * versesPerPage;
	const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
	const currentVerses = verses.slice(indexOfFirstVerse, indexOfLastVerse);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="flex flex-column center mw9">
			<Header></Header>

			<Search onInputChange={onInputChange} onSubmit={onSubmit}></Search>
			{loaded ? (
				verses.length ? (
					<Verses verses={currentVerses} />
				) : (
					<h2 className="center">No results</h2>
				)
			) : loading ? (
				<h2 className="center">Loading...</h2>
			) : null}

			{loaded && verses.length ? (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					relevantPages={relevantPages}
					paginate={paginate}
				/>
			) : null}
			<Footer></Footer>
		</div>
	);
}

export default App;
