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
	REGISTER_USER
} from "../types";

const AuthState = props => {
	const initialState = {
		user: null,
		authError: null,
		token: localStorage.getItem("token"),
		isAuthenticated: false,
		loading: true
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

	//Logout user
	const logOut = async () => {
		try {
			await axios.post("http://localhost:5000/api/v1/auth/logout");
			dispatch({ type: LOGOUT });
		} catch (e) {
			errHandler(e);
		}
	};

	//error dispatcher func
	const errHandler = e => {
		dispatch({
			type: AUTH_ERROR,
			payload: e.response?.data?.error?.msg
				? e.response.data.error.msg
				: "Something went wrong please try again later..."
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
				registerUser,
				login,
				loadUser,
				logOut
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
