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
	CLEAR_ERROR
} from "../types";

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
	const searchUsers = async queryStr => {
		try {
			const foundUsers = await axios.get(
				`https://api.github.com/search/users?q=${queryStr}`
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
				setLoading
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};
export default GithubState;