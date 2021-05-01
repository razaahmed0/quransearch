import React, { useState, useEffect } from "react";
import Posts from "./components/Post";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(
				"http://api.alquran.cloud/v1/search/women/all/en"
			);
			console.log(res.data.data.matches);
			setPosts(res.data.data.matches);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	// *Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="flex flex-column center mw8">
			<h1 className="f1">Quran Search</h1>
			<Posts posts={currentPosts} loading={loading} />
			<Pagination
				currentPage={currentPage}
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
