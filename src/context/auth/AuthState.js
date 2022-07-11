import { useReducer } from "react";
import axios from "axios";

// Local imports
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthTokenHeader from "../helpers/setAuthToken";
import { AUTH_ERROR, CLEAR_ERROR, LOGIN, LOAD_USER, LOGOUT } from "../types";

const authBaseUrl = "http://localhost:5000/api/v1/auth";

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
	const registerUser = async creds => {
		try {
			const res = await axios.post();
			dispatch({ type: LOGIN, payload: res.data.token });
		} catch (e) {
			errHandler(e);
		}
	};

	//Login
	const login = async creds => {
		try {
			const res = await axios.post(`${authBaseUrl}/login`, creds, {
				"Content-Type": "application/json"
			});
			console.log(res.data);
			dispatch({ type: LOGIN, payload: res.data.token });
			loadUser();
		} catch (e) {
			errHandler(e);
		}
	};

	//Get logged in user with token
	const loadUser = async () => {
		setAuthTokenHeader();
		try {
			const res = await axios.get(`${authBaseUrl}/me`);
			console.log();
			dispatch({ type: LOAD_USER, payload: res.data.data });
		} catch (e) {
			errHandler(e);
		}
	};

	//Logout user
	const logOut = async () => {
		try {
			const res = await axios.get("");
			dispatch({ type: LOGOUT, payload: res.data });
		} catch (e) {
			errHandler(e);
		}
	};

	//error dispatecher fund
	const errHandler = e => {
		console.log(e);
		console.log(e.response?.data);
		dispatch({
			type: AUTH_ERROR,
			payload: e.response?.data || "Something went wrong"
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
