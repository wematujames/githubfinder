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
	SET_SEARCHTERM
} from "../types";

const params = {
	client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
	client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
};

const GithubState = props => {
	const initialState = {
		users: [],
		loading: false,
		githubError: null,
		searchTerm: ""
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Actions
	//Get github users
	const getUsers = async () => {
		try {
			const res = await axios.get(
				"https://api.github.com/users?client_id=68b673e5140c6135207c&client_secret=ae12df2428ba2d96e353e37ea1f4a6821802a341"
			);
			dispatch({ type: GET_USERS, payload: res.data });
		} catch (e) {
			dispatch({ type: SET_ERROR, payload: e });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		}
	};

	//Search for Github user
	const searchUsers = async queryStr => {
		try {
			const foundUsers = await axios.get(
				`https://api.github.com/search/users`,
				{
					params: { q: `${queryStr}` }
				}
			);
			dispatch({ type: SEARCH_USERS, payload: foundUsers.data.items });
		} catch (e) {
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
