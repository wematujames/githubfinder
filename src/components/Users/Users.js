import { useContext, useEffect } from "react";

import GithubContext from "../../context/github/GithubContext";

import UserItem from "./UserItem";
import Loader from "../Utility/Loader";

function Users() {
	const githubContext = useContext(GithubContext);

	const { users, loading, getUsers } = githubContext;

	useEffect(() => {
		getUsers();
		//eslint-disable-next-line
	}, []);

	if (loading) return <Loader />;
	return (
		<div className="users">
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}
export default Users;
