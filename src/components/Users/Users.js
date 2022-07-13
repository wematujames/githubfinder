import { useContext, useEffect } from "react";

import GithubContext from "../../context/github/GithubContext";

import UserItem from "./UserItem";
import PreLoader from "../Utility/PreLoader";

function Users() {
	const githubContext = useContext(GithubContext);

	const { loading, getUsers } = githubContext; //users,

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
		<div className="row">
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}
export default Users;
