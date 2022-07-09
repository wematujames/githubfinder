import React from "react";

import UserItem from "./UserItem";

function Users({ users }) {
	return (
		<div className="users">
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
}
export default Users;
