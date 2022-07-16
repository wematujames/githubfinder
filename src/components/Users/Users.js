import { useEffect } from "react";

import { useGithub } from "../../context/contextHooks";

import UserItem from "./UserItem";
import PreLoader from "../Layout/PreLoader";

const Users = () => {
	const { loading, users } = useGithub();

	useEffect(() => {
		// getUsers();
	}, []);

	if (loading) return <PreLoader />;
	return (
		<div id="users-container" className="row ">
			{users && users.map(user => <UserItem key={user.id} user={user} />)}
		</div>
	);
};
export default Users;
