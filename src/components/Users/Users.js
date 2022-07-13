import { useEffect } from "react";

import useGithub from "../../components/hooks/useGithub";

import UserItem from "./UserItem";
import PreLoader from "../Layout/PreLoader";

const Users = () => {
	const { loading, getUsers } = useGithub(); //users,

	const users = [
		{
			id: 1,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 2,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 3,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 4,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 5,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 6,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		},
		{
			id: 7,
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo",
			login: "mojombo"
		}
	];

	useEffect(() => {
		// getUsers();
		//eslint-disable-next-line
	}, []);

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
