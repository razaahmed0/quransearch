import React, { useState, useEffect } from "react";

function Filter({ filterVerses }) {
	const [filters, setFilters] = useState([]);
	const [input, setInput] = useState(null);
	const [showInput, setShowInput] = useState(false);

	const handleInput = (e) => setInput(e.target.value);
	const handleClick = () => setShowInput(!showInput);

	const addFilter = () => {
		if (input) {
			if (!filters.includes(input.trim())) {
				setFilters([...filters, input]);
			}
			handleClick();
			setInput(null);
		}
	};
	const removeFilter = (filter) => {
		setFilters(filters.filter((item) => item !== filter));
	};

	useEffect(() => {
		filterVerses(filters);
	}, [filters, filterVerses]);

	return (
		<div>
			{showInput ? (
				<>
					<input
						className="input-reset pa2 ba br2 b--green"
						onChange={handleInput}
						type="text"
					/>
					<button
						className="f3 br2 bg-green white ml2 dim pointer"
						onClick={addFilter}>
						&#10003;
					</button>
					<button
						className="f3 br2 bg-green white ml2 dim pointer"
						onClick={handleClick}>
						&#x2716;
					</button>
				</>
			) : (
				<>
					{filters.map((filter) => (
						<button
							key={filter}
							className="f5 br4 ba bw2 black b--blue shadow-5 black ml2 dim pointer pa2"
							onClick={() => removeFilter(filter)}>
							{filter} <span className="pl3 f6">&#10060;</span>
						</button>
					))}
					<button
						className="f4 br2 bg-green white w4 dim pointer ml2"
						onClick={handleClick}>
						Add Filter
					</button>
				</>
			)}
		</div>
	);
}

export default Filter;
