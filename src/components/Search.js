import React from "react";

function Search({ onInputChange, onSubmit }) {
	return (
		<div className="flex mt4 mb2 justify-center">
			<input
				type="text"
				className="input-reset pa2 w-60 ba br2 b--green mr4"
				placeholder="Search terms i.e Abraham"
				onChange={onInputChange}
			/>
			<button
				className="f4 br2 light-yellow bg-green w4 dim pointer "
				onClick={onSubmit}>
				Search
			</button>
		</div>
	);
}

export default Search;
