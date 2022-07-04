import React from "react";
import PropTypes from "prop-types";

function UserItem({ user }) {
	return (
		<div className="user-item">
			<img className="avatar-img" src={user.avatar_url} alt="user_avator" />
			<div>{user.login}</div>
			<a className="link-btn" href={user.html_url}>
				More
			</a>
		</div>
	);
}

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
