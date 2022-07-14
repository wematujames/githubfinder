import { useReducer } from "react";
import axios from "axios";

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
			const res = await axios.get("https://api.github.com/users");
			dispatch({ type: GET_USERS, payload: res.data });
		} catch (e) {
			dispatch({ type: SET_ERROR, payload: e });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		}
	};

	//Search for Github user
	const searchUsers = async q => {
		try {
			const foundUsers = await axios.get(
				`https://api.github.com/search/users`,
				{ params: { q } }
			);
			dispatch({ type: SEARCH_USERS, payload: foundUsers.data.items });
		} catch (e) {
			dispatch({ type: SET_ERROR, payload: e.response.data.message });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		}
	};

	//Get User
	const getUser = async username => {
		try {
			setLoading();
			const res = await axios.get(
				`https://api.github.com/user/${username}`
			);
			dispatch({ type: GET_USER, payload: res.data });
		} catch (e) {
			console.log(e);
			dispatch({ type: SET_ERROR, payload: e.response.data.message });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
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

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
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
