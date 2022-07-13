import { useReducer } from "react";

// Local imports
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { CLEAR_ALERT, SET_ALERT } from "../types";

const AlertState = props => {
	const initialState = { alert: null };

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	//Set alert
	const setAlert = alert => {
		dispatch({ type: SET_ALERT, payload: alert });
		setTimeout(() => dispatch({ type: CLEAR_ALERT }), 5000);
	};

	//Clear alert
	const clearAlert = () => {
		dispatch({ type: CLEAR_ALERT });
	};

	return (
		<AlertContext.Provider
			value={{ alert: state.alert, setAlert, clearAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};
export default AlertState;
