import {
	GET_USER_SEARCH_HISTORY,
	REMOVE_USER_SEARCH_TERM,
	CLEAR_NOTIFICATION,
	SET_ERROR,
	CLEAR_ERROR,
	SET_NOTIFICATION
} from "../types";

const UserReducer = (state, action) => {
	switch (action.type) {
		case GET_USER_SEARCH_HISTORY:
			return {
				...state,
				loading: false,
				userSearchHistory: action.payload
			};
		case REMOVE_USER_SEARCH_TERM:
			return {
				...state,
				userNotification: action.payload,
				loading: false
			};
		case SET_ERROR:
			return {
				...state,
				loading: false,
				userError: action.payload
			};
		case SET_NOTIFICATION:
			return {
				...state,
				userNotification: action.payload
			};
		case CLEAR_ERROR:
		case CLEAR_NOTIFICATION:
			return {
				...state,
				userNotification: null,
				loading: false,
				userError: null
			};
		default:
			return {
				...state
			};
	}
};
export default UserReducer;
