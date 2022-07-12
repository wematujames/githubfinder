import { useEffect, useState } from "react";

import useGithub from "../hooks/useGithub";
import useAlert from "../hooks/useAlert";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");

	const { setAlert } = useAlert();
	const { error, searchUsers, setLoading } = useGithub();

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
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search for someone..."
				className="block-input"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<button
				type="submit"
				className="btn block hoverable waves-effect wave-light black ligthen-1 form-submit-btn">
				Search
			</button>
		</form>
	);
}
export default Search;
