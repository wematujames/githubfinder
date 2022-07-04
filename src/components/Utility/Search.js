import React from "react";

function Search() {
	return (
		<form className="overall">
			<input type="text" name="search" id="search" className="search" />
			<button type="submit" className="search-btn">
				Search
			</button>
			<button className="clear-btn">Clear</button>
		</form>
	);
}

export default Search;
