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
	CLEAR_NOTIFICATION,
	SET_NOTIFICATION
} from "../types";

const UserState = props => {
	const initialState = {
		userSearchHistory: [],
		loading: true,
		userError: null,
		searchTerm: "",
		userNotification: ""
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	//Actions
	//Get user search history
	const getSearchHistory = async () => {
		try {
			setLoading(true);
			setLoading();
			const res = await axios.get("/api/v1/searchterms/");
			dispatch({ type: GET_USER_SEARCH_HISTORY, payload: res.data.data });
		} catch (e) {
			errorHandler(e);
		}
	};

	//Get user search history
	const addUserSearchTerm = async term => {
		try {
			await axios.post(
				"/api/v1/searchterms/",
				{
					searchTerm: term
				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			);

			getSearchHistory();
		} catch (e) {
			errorHandler(e);
		}
	};

	//Add to user search history
	const removeUserSearchTerm = async id => {
		try {
			setLoading(true);
			const res = await axios.delete(`/api/v1/searchterms/${id}`);
			getSearchHistory();
			dispatch({
				type: REMOVE_USER_SEARCH_TERM,
				payload: { msg: res.data?.msg || "Success" }
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

	//Set notification
	const setNotification = note => {
		dispatch({ type: SET_NOTIFICATION, payload: note });
		setTimeout(() => {
			dispatch({ type: CLEAR_NOTIFICATION });
		}, 5000);
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
		<UserContex.Provider
			value={{
				searchHistory: state.userSearchHistory,
				loading: state.loading,
				userError: state.userError,
				searchTerm: state.searchTerm,
				userNotification: state.userNotification,
				removeUserSearchTerm,
				getSearchHistory,
				addUserSearchTerm,
				setNotification
			}}>
			{props.children}
		</UserContex.Provider>
	);
};
export default UserState;
