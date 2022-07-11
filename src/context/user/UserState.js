import { useReducer } from "react";
import axios from "axios";

// Local imports
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {
	GET_USER_SEARCH_HISTORY,
	SET_ERROR,
	CLEAR_ERROR,
	SET_LOADING
} from "../types";

const UserState = props => {
	const initialState = { searchHistory: null, error: null };

	const [state, dispatch] = useReducer(UserReducer, initialState);

	//Actions
	//Get User users
	const getUserSearchHistory = async user => {
		try {
			const res = await axios.get(
				"https://localhost:5000/api/v1/searchTerms",
				{ params: { user } }
			);
			dispatch({ type: GET_USER_SEARCH_HISTORY, payload: res.data });
		} catch (e) {
			errHandler(e);
		}
	};

	// Set loading for spinner to show
	const setLoading = state => {
		dispatch({ type: SET_LOADING, payload: state });
	};

	//error dispatecher fund
	const errHandler = e => {
		dispatch({ type: SET_ERROR, payload: e });
		setTimeout(() => {
			dispatch({ type: CLEAR_ERROR });
		}, 5000);
	};

	return (
		<UserContext.Provider
			value={{
				searchHistory: state.searchHistory,
				loading: state.loading,
				error: state.error,
				getUserSearchHistory,
				setLoading
			}}>
			{props.children}
		</UserContext.Provider>
	);
};
export default UserState;
