import React from "react";

function Post({ posts, loading }) {
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<ul className="flex flex-column list">
			{posts.map((post, index) => (
				<li
					key={index}
					className="pt2 pa4">
					{post.text}
				</li>
			))}
		</ul>
	);
}

export default Post;
