import { useEffect } from "react";

import useGithub from "../hooks/useGithub";
import useAlert from "../hooks/useAlert";

import Alert from "../Layout/Alert";

const Search = () => {
	const { setAlert, alert } = useAlert();
	const {
		githubError,
		searchUsers,
		setLoading,
		clear,
		searchTerm,
		setSearch
	} = useGithub();

	//Delay search
	const debounceFn = (func, timeout = 1000) => {
		let timeoutId;
		return (...args) => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setLoading(true);
				func.apply(null, args);
			}, timeout);
		};
	};
	//search users/debounce
	const search = debounceFn(searchUsers);

	const handleChange = e => {
		const { value } = e.target;
		setSearch(value);
		if (!value) return;
		search(value);
	};

	//clear input and fetched users
	const clearScreen = () => {
		clear();
		setSearch("");
		setLoading(false);
	};

	useEffect(() => {
		if (githubError) setAlert(githubError);
		// eslint-disable-next-line
	}, [githubError]);

	return (
		<section className="center">
			{alert && <Alert msg={alert} />}
			<div className="input-field">
				<input
					type="text"
					name="search"
					id="search"
					className="block-input"
					value={searchTerm}
					onChange={handleChange}
				/>
				<label htmlFor="fName">Search for someone...</label>
			</div>
			<button
				onClick={clearScreen}
				className="btn hoverable waves-effect clear-btn full-width">
				Clear
			</button>
		</section>
	);
};

export default Search;
