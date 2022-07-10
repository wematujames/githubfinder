import { useContext, useEffect, useState } from "react";

import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const { setAlert, alert } = alertContext;
	const { error, searchUsers, setLoading } = githubContext;

	const handleSearch = e => {
		e.preventDefault();
		if (!searchTerm) {
			setAlert("Please enter something...");
			return;
		}
		setLoading(true);
		searchUsers(searchTerm);
	};

	useEffect(() => {
		if (error) setAlert("something went wrong");
		// eslint-disable-next-line
	}, [error]);

	return (
		<form className="search-form" onSubmit={handleSearch}>
			{alert && <div className="alert">{alert}</div>}
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
