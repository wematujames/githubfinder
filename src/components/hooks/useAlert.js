import { useContext } from "react";

import AlertContext from "../../context/alert/AlertContext";

function useAlert() {
	return useContext(AlertContext);
}
export default useAlert;
