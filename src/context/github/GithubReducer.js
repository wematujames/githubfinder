import {
	GET_USERS,
	CLEAR_ERROR,
	SEARCH_USERS,
	SET_LOADING,
	SET_ERROR
} from "../types";

const GithubReducer = (state, action) => {
	switch (action.type) {
		case GET_USERS:
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload
			};
		default:
			return { ...state };
	}
};
export default GithubReducer;
