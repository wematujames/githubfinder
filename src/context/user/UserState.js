import { useReducer } from "react";
import axios from "axios";

// Local imports
import UserContex from "./UserContex";
import UserReducer from "./UserReducer";
import {
	GET_USER_SEARCH_HISTORY,
	REMOVE_USER_SEARCH_TERM,
	SET_LOADING,
	SET_ERROR,
	CLEAR_ERROR,
	CLEAR_NOTIFICATION
} from "../types";

const UserState = props => {
	const initialState = {
		userSearchHistory: [],
		loading: true,
		error: null,
		searchTerm: "",
		notification: ""
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	//Actions
	//Get user search history
	const getSearchHistory = async () => {
		try {
			setLoading();
			const res = await axios.get(
				"http://localhost:5000/api/v1/searchterms/"
			);
			dispatch({ type: GET_USER_SEARCH_HISTORY, payload: res.data.data });
		} catch (e) {
			errorHandler(e);
		}
	};

	//Get user search history
	const addUserSearchTetm = async () => {
		try {
			await axios.post("http://localhost:5000/api/v1/searchterms/");
			getSearchHistory();
		} catch (e) {
			errorHandler(e);
		}
	};

	//Add to user search history
	const removeUserSearchTerm = async id => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/api/v1/searchterms/${id}`
			);
			getSearchHistory();
			dispatch({
				type: REMOVE_USER_SEARCH_TERM,
				payload: res.data.msg
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_NOTIFICATION
				});
			}, 5000);
		} catch (e) {
			errorHandler(e);
		}
	};

	// Set loading for spinner to show
	const setLoading = state => {
		dispatch({ type: SET_LOADING, payload: state });
	};

	//Error handler
	const errorHandler = e => {
		dispatch({ type: SET_ERROR, payload: e.response.data.message });
		setTimeout(() => {
			dispatch({ type: CLEAR_ERROR });
		}, 5000);
	};

	return (
		<UserContex.Provider
			value={{
				searchHistory: state.userSearchHistory,
				loading: state.loading,
				error: state.error,
				searchTerm: state.searchTerm,
				notification: state.notification,
				removeUserSearchTerm,
				getSearchHistory,
				addUserSearchTetm
			}}>
			{props.children}
		</UserContex.Provider>
	);
};
export default UserState;
