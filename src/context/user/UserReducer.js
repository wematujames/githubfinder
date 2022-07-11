import {
	GET_USER_SEARCH_HISTORY,
	SET_ERROR,
	CLEAR_ERROR,
	SET_LOADING
} from "../types";

const UserReducer = (state, action) => {
	switch (action.type) {
		case GET_USER_SEARCH_HISTORY:
			return {
				...state,
				searchHistory: action.payload
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};
		default:
			return { ...state };
	}
};
export default UserReducer;
