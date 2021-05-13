import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Verses from "./components/Verses";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
	const [input, setInput] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);

	const [verses, setVerses] = useState([]);
	const [totalPages, setTotalPages] = useState([]);
	const [visibleVerses, setVisibleVerses] = useState([]);
	const [filteredVerses, setFilteredVerses] = useState([]);
	const [relevantIndexes, setRelevantIndexes] = useState([]);
	const [visiblePageNumbers, setVisiblePageNumbers] = useState([1, 2, 3, 4, 5]);

	const versesPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);

	//* get main data given user input term
	const getVerses = () => {
		const fetchVerses = async () => {
			setVerses([]);
			setLoaded(false);
			setLoading(true);

			const url = `http://api.alquran.cloud/v1/search/${input}/all/en.hilali`;
			const res = await axios.get(url);
			if (res.status === 200) {
				setVerses(res.data.data.matches);
				setFilteredVerses(res.data.data.matches);
			}

			setLoaded(true);
			setLoading(false);
		};

		fetchVerses();
	};

	//* filter main array given filter terms and reset page positon
	const filterVerses = useCallback(
		(filters) => {
			if (filters.length) {
				setFilteredVerses(
					verses.filter((v) =>
						filters.every(
							(term) => v.text.toLowerCase().indexOf(term.toLowerCase()) > -1
						)
					)
				);
			} else {
				setFilteredVerses(verses);
			}
			setCurrentPage(1);
		},
		[verses]
	);

	//* total number of pages given the filtered verses and verses per page
	useEffect(() => {
		const calcTotalPages = () => {
			const totalPages = [];
			for (
				let i = 1;
				i < Math.ceil(filteredVerses.length / versesPerPage);
				i++
			) {
				totalPages.push(i);
			}
			setTotalPages(totalPages);
		};
		calcTotalPages();
	}, [filteredVerses]);

	//* page numbers that will be visible in the pagination
	useEffect(() => {
		let visiblePageNumbers = [];
		if (currentPage > 4) {
			visiblePageNumbers = totalPages.slice(currentPage - 4, currentPage + 3);
		} else {
			let first = totalPages.slice(0, currentPage);
			visiblePageNumbers = totalPages.slice(first[0] - 1, currentPage + 3);
		}
		setVisiblePageNumbers(visiblePageNumbers);
	}, [currentPage, totalPages]);

	//* the indices of the verses that will be visible on the current page
	useEffect(() => {
		const indexOfLastVerse = currentPage * versesPerPage;
		const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
		setRelevantIndexes([indexOfFirstVerse, indexOfLastVerse]);
	}, [currentPage]);

	//* verses that will be visible on the current page
	useEffect(() => {
		setVisibleVerses(
			filteredVerses.slice(relevantIndexes[0], relevantIndexes[1])
		);
	}, [filteredVerses, relevantIndexes]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className="flex flex-column center mw9 pb4">
			<Header></Header>
			<Search onInputChange={onInputChange} getVerses={getVerses}></Search>

			{loaded ? (
				verses.length ? (
					<>
						<div className="pa2 bg-near-white br2">
							<Filter filterVerses={filterVerses}></Filter>
						</div>
						<Verses verses={visibleVerses} />
					</>
				) : (
					<h2 className="center">No results</h2>
				)
			) : loading ? (
				<h2 className="center">Loading...</h2>
			) : null}

			{loaded && totalPages.length > 1 ? (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					visiblePageNumbers={visiblePageNumbers}
					paginate={paginate}
				/>
			) : null}

		</div>
	);
}

export default App;
