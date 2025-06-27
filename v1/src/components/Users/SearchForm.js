import { useState } from "react";
import { useGithub } from "../../context/contextHooks";

const Search = () => {
	const [searchterm, setSearchTerm] = useState("");

	const {
		searchUsers,
		setLoading,
		clear,
		searchTerm,
		setSearch,
		users,
		timerId
	} = useGithub();

	//clear input and fetched users
	const clearScreen = () => {
		clear();
		setLoading(false);
	};

	//Search users
	const handleSearch = e => {
		setSearchTerm(e.target.value);
		if (!searchTerm) return;

		setSearch(e.target.value);
		// 	return setNotification({ msg: "Please enter some text" });
		console.log(timerId);
		if (timerId) clearTimeout(timerId);
		searchUsers(searchTerm);
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
					onChange={handleSearch}
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
