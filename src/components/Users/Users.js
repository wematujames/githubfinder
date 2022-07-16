import { useGithub } from "../../context/contextHooks";

import UserItem from "./UserItem";
import PreLoader from "../Layout/PreLoader";

const Users = () => {
	const { loading, users } = useGithub();

	if (loading) return <PreLoader />;
	return (
		<div id="users-container" className="row ">
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};
export default Users;
