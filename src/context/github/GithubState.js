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
	CLEAR_USERS
} from "../types";

const githubEndpoint = "https://api.github.com";
const githubreqparams = {
	client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
	client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
};

const GithubState = props => {
	const initialState = {
		users: [],
		loading: true,
		error: null
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Actions
	//Get github users
	const getUsers = async () => {
		try {
			const res = await axios.get(`${githubEndpoint}/users`, {
				params: githubreqparams
			});
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
				`${githubEndpoint}/search/users`,
				{
					params: { q: `${queryStr}`, ...githubreqparams }
				}
			);
			console.log(foundUsers.data.items);
			dispatch({ type: SEARCH_USERS, payload: foundUsers.data.items });
		} catch (e) {
			dispatch({ type: SET_ERROR, payload: e });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		}
	};

	//Clear user from screen
	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};

	// Set loading for spinner to show
	const setLoading = state => {
		dispatch({ type: SET_LOADING, payload: state });
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				error: state.error,
				loading: state.loading,
				getUsers,
				searchUsers,
				setLoading,
				clearUsers
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};
export default GithubState;
