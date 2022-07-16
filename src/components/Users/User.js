import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useGithub from "../hooks/useGithub";

import PreLoader from "../Layout/PreLoader";

const User = () => {
	const { username } = useParams();

	const { loading } = useGithub();

	useEffect(() => {
		// getUser(username);
		//eslint-disable-next-line
	}, []);

	if (loading) return <PreLoader />;
	return <div>User{username}</div>;
};

export default User;
