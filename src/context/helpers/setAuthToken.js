import axios from "axios";

const setAuthTokenHeader = () => {
	if (localStorage.token) {
		axios.defaults.headers.common.authorization = `Bearer ${localStorage.token}`;
	} else {
		localStorage.removeItem("token");
	}
};
export default setAuthTokenHeader;
