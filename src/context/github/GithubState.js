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
			errorHandler(e);
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
			errorHandler(e);
		}
	};

	//Get User
	const getUser = async username => {
		try {
			setLoading();
			const res = await axios.get(
				`https://api.github.com/user/${username}`,
				{
					params: {
						client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
						client_secret:
							process.env.REACT_APP_GITHUB_CLIENT_SECRET
					}
				}
			);
			dispatch({ type: GET_USER, payload: res.data });
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
