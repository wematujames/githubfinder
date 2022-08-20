import { useContext } from "react";

import AuthContext from "./auth/AuthContext";
import GithubContext from "./github/GithubContext";
import UserContext from "./user/UserContex";

const useAuth = () => useContext(AuthContext);
const useGithub = () => useContext(GithubContext);
const useUser = () => useContext(UserContext);

export { useAuth, useGithub, useUser };
