import React from "react";

import UserItem from "./UserItem";

const users = [
	{
		id: 1,
		login: "mojombo",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	},
	{
		id: 2,
		login: "wematu",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	},
	{
		id: 3,
		login: "wematu",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	},
	{
		id: 4,
		login: "wematu",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	}
];

function Users() {
	return (
		<div className="users">
			{users.map(user => (
				<UserItem id={user.id} user={user} />
			))}
		</div>
	);
}
export default Users;
