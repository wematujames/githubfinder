import {
	AUTH_ERROR,
	CLEAR_ERROR,
	LOGIN,
	LOAD_USER,
	LOGOUT,
	REGISTER_USER,
	GET_USER_SEARCH_HISTORY,
	SET_LOADING
} from "../types";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_USER:
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
		case GET_USER_SEARCH_HISTORY:
			return {
				...state,
				searchHistory: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
				loading: false,
				authError: null
			};
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
