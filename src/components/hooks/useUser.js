import { useContext } from "react";

import UserContext from "../../context/user/UserContex";

function UseUser() {
	return useContext(UserContext);
}
export default UseUser;
