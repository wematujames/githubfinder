import { useState } from "react";
import { useGithub, useUser } from "../../context/contextHooks";

const Search = () => {
	const [searchterm, setSearchTerm] = useState("");

	const { searchUsers, setLoading, clear, searchTerm, users } = useGithub();

	const { addUserSearchTerm } = useUser();

	//clear input and fetched users
	const clearScreen = () => {
		clear();
		setLoading(false);
	};

	//Search users
	const handleSearch = e => {
		e.preventDefault();
		searchUsers(e.target.value);
		addUserSearchTerm(e.target.value);
	};

	return (
		<section className="center search-container">
			<div className="input-field">
				<input
					type="text"
					name="search"
					id="search"
					className="block-input"
					value={searchterm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<label htmlFor="fName">Search for someone...</label>
			</div>
			<button
				onClick={handleSearch}
				className="btn hoverable waves-effect clear-btn full-width">
				Search
			</button>
			{users && users.length > 0 && searchTerm && (
				<button
					onClick={clearScreen}
					className="btn hoverable waves-effect clear-btn full-width">
					Clear
				</button>
			)}
		</section>
	);
};

export default Search;
