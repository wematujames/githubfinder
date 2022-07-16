import { useReducer } from "react";

// Local imports
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
	GET_USERS,
	SEARCH_USERS,
	SET_ERROR,
	SET_LOADING,
	CLEAR_ERROR,
	CLEAR,
	SET_SEARCHTERM,
	GET_USER
} from "../types";

const GithubState = props => {
	const initialState = {
		users: [],
		loading: false,
		githubError: null,
		searchTerm: "",
		user: {}
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Actions
	//Get github users
	const getUsers = async () => {
		try {
			setLoading(true);
			const res = await fetch("https://api.github.com/users");
			const data = await res.json();
			dispatch({ type: GET_USERS, payload: data });
		} catch (e) {
			errorHandler(e);
		}
	};

	//Search for Github user
	const searchUsers = async q => {
		try {
			setLoading(true);
			const res = await fetch(
				`https://api.github.com/search/users?q=${q}`
				//&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
				//& client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }
			);
			const data = await res.json();
			dispatch({ type: SEARCH_USERS, payload: data.items });
		} catch (e) {
			errorHandler(e);
		}
	};

	//Get User
	const getUser = async username => {
		try {
			setLoading(true);
			const res = await fetch(`https://api.github.com/users/${username}`);
			const data = await res.json();
			dispatch({ type: GET_USER, payload: data });
		} catch (e) {
			errorHandler(e);
		}
	};

	//Set search term
	const setSearch = val => {
		dispatch({ type: SET_SEARCHTERM, payload: val });
	};

	//Clear screen
	const clear = () => {
		dispatch({ type: CLEAR });
	};

	// Set loading for spinner to show
	const setLoading = state => {
		dispatch({ type: SET_LOADING, payload: state });
	};

	//Error handler
	const errorHandler = e => {
		dispatch({
			type: SET_ERROR,
			payload: {
				msg: e.response?.data?.message
					? e.response?.data?.message
					: "An error occured",
				type: "danger"
			}
		});
		setTimeout(() => {
			dispatch({ type: CLEAR_ERROR });
		}, 5000);
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				githubError: state.githubError,
				loading: state.loading,
				searchTerm: state.searchTerm,
				getUser,
				getUsers,
				searchUsers,
				setLoading,
				clear,
				setSearch
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};
export default GithubState;
