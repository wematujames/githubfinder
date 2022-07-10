import { useReducer } from "react";
import axios from "axios";

// Local imports
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { AUTH_ERROR, CLEAR_ERROR, LOGIN, LOGOUT } from "../types";

//types
// import { logIn, loadUser, logOut } from "./types";

const AuthState = props => {
	const initialState = {
		user: null,
		authErrors: [],
		token: localStorage.getItem("token"),
		isAuthenticated: false,
		loading: true
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	//Register user
	const registerUser = async creds => {
		try {
			const res = await axios.get("");
			dispatch({ type: LOGIN, payload: res.data.token });
		} catch (e) {
			dispatch({ type: AUTH_ERROR, payload: e.error.responseText });
		}
	};

	//Login
	const login = async creds => {
		const config = {
			"Content-Type": "application/json"
		};
		try {
			const res = await axios.post("", creds, config);
			dispatch({ type: LOGIN, payload: res.data.token });
		} catch (e) {
			dispatch({ type: AUTH_ERROR, payload: e.error.responseText });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 3000); //remove error after 3secs
		}
	};

	//Get logged in user with token
	const loadUser = async () => {
		try {
			const res = await axios.get("");
			dispatch({ type: LOGIN, payload: res.data.user });
		} catch (e) {
			dispatch({ type: AUTH_ERROR, payload: e.error.responseText });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 3000);
		}
	};

	//Logout user
	const logOut = async () => {
		try {
			const res = await axios.get("");
			dispatch({ type: LOGOUT, payload: res.data });
		} catch (e) {
			dispatch({ type: AUTH_ERROR, payload: e.error.responseText });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				authErrors: state.authErrors,
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
