import { useReducer } from "react";
import axios from "axios";

// Local imports
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthTokenHeader from "../helpers/setAuthToken";
import {
	AUTH_ERROR,
	CLEAR_ERROR,
	LOGIN,
	LOAD_USER,
	LOGOUT,
	SET_LOADING,
	REGISTER_USER,
	GET_USER_SEARCH_HISTORY
} from "../types";

const AuthState = props => {
	const initialState = {
		user: null,
		authError: null,
		token: localStorage.getItem("token"),
		isAuthenticated: false,
		loading: true,
		searchHistory: []
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//Register user
	const registerUser = async regInfo => {
		try {
			const res = await axios.post(
				"http://localhost:5000/api/v1/auth/register",
				regInfo
			);
			dispatch({ type: REGISTER_USER, payload: res.data.token });
			// setAuthTokenHeader();
			// loadUser();
		} catch (e) {
			errHandler(e);
		}
	};

	//Login
	const login = async creds => {
		try {
			const res = await axios.post(
				"http://localhost:5000/api/v1/auth/login",
				creds
			);
			dispatch({ type: LOGIN, payload: res.data.token });
		} catch (e) {
			errHandler(e);
		}
	};

	//Get logged in user with token
	const loadUser = async () => {
		setAuthTokenHeader();
		try {
			const res = await axios.get("http://localhost:5000/api/v1/auth/me");
			dispatch({ type: LOAD_USER, payload: res.data.data });
		} catch (e) {
			errHandler(e);
		}
	};

	//Get user search history
	const getSearchHistory = async () => {
		try {
			setLoading();
			const res = await axios.get(
				"http://localhost:5000/api/v1/searchterms/"
			);
			dispatch({ type: GET_USER_SEARCH_HISTORY, payload: res.data.data });
		} catch (e) {
			errHandler(e);
		}
	};

	//Set error relation to authentication
	const setAuthError = err => {
		dispatch({ type: AUTH_ERROR, payload: err });
	};

	//Logout user
	const logOut = async () => {
		try {
			await axios.post("http://localhost:5000/api/v1/auth/logout");
			dispatch({ type: LOGOUT });
		} catch (e) {
			errHandler(e);
		}
	};

	// Set loading for spinner to show
	const setLoading = val => {
		dispatch({ type: SET_LOADING, payload: val });
	};

	//error dispatcher func
	const errHandler = e => {
		dispatch({
			type: AUTH_ERROR,
			payload: {
				msg: e.response?.data?.error?.msg
					? e.response.data.error.msg
					: "Something went wrong please try again later...",
				type: "danger"
			}
		});
		setTimeout(() => {
			dispatch({ type: CLEAR_ERROR });
		}, 5000); //remove error after 3secs
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				authError: state.authError,
				loading: state.loading,
				searchHistory: state.searchHistory,
				setLoading,
				registerUser,
				login,
				loadUser,
				logOut,
				getSearchHistory,
				setAuthError
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
