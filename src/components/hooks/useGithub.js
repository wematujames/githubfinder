import { useContext } from "react";

import GithubContext from "../../context/auth/GithubContext";

function useGithub() {
	return useContext(GithubContext);
}
export default useGithub;
