import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
	return (
		<div className="col l3 m4 s4 center-align">
			<img
				className="avatar-img"
				src={user.avatar_url}
				alt="user_avatar"
			/>
			<div>{user.login}</div>
			<a href={user.html_url}>More</a>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};
UserItem.defaultProps = {
	user: {
		id: 4,
		login: "wematu",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	}
};
export default UserItem;
