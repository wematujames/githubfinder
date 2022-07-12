import { useContext } from "react";

import GithubContext from "../../context/github/GithubContext";

function useGithub() {
	return useContext(GithubContext);
}
export default useGithub;
