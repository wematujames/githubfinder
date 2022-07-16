import { useGithub } from "../../context/contextHooks";

const Search = () => {
	const { searchUsers, setLoading, clear, searchTerm, setSearch } =
		useGithub();

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

	return (
		<section className="center">
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
