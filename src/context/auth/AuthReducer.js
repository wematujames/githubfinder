import { AUTH_ERROR, CLEAR_ERROR, LOGIN, LOAD_USER, LOGOUT } from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem("token", action.payload);
			return {
				...state,
				token: action.payload
			};
		case LOAD_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
				isAuthenticated: true
			};
		case LOGOUT:
		case AUTH_ERROR:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				loading: false,
				authError: action.payload
			};
		case CLEAR_ERROR:
			return {
				...state,
				authError: null
			};
		default:
			return { ...state };
	}
};
export default AuthReducer;
