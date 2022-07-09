import React, { useState } from "react";

function Search({ searchUsers }) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = e => {
		e.preventDefault();
		if (!searchTerm) return;
		searchUsers(searchTerm);
	};

	return (
		<form className="search-form" onSubmit={handleSearch}>
			<input
				type="text"
				name="search"
				id="search"
				className="block-input"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<button type="submit" className="search-btn">
				Search
			</button>
			<button className="clear-btn">Clear</button>
		</form>
	);
}
export default Search;
