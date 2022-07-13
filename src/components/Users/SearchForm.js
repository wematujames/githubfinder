import { useEffect, useState } from "react";

import useGithub from "../hooks/useGithub";
import useAlert from "../hooks/useAlert";

import Alert from "../Layout/Alert";

function Search() {
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
		<>
			<div style={styles.alertContainer}>
				{alert && <Alert msg={alert} />}
			</div>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search for someone..."
				className="block-input"
				value={searchTerm}
				onChange={handleChange}
			/>
			<button
				style={styles.clearBtn}
				onClick={clearScreen}
				className="btn block hoverable waves-effect wave-light grey lighten-2 black-text">
				Clear
			</button>
		</>
	);
}

const styles = {
	alertContainer: {
		minHeight: "3rem"
	},
	clearBtn: {
		marginTop: "0.5rem"
	}
};
export default Search;
