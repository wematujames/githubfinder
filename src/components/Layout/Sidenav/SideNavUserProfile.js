import React from "react";
import PropTypes from "prop-types";

const SideNavUserProfile = ({ user }) => {
	return (
		<li className="container">
			<div className="user-view center-align">
				{user.profile_img ? (
					<img
						className="circle center user-avatar"
						src={user}
						alt="user-avatar"
					/>
				) : (
					<i className="material-icons large">person_pin</i>
				)}
				<a href="#name ">
					<span className="name">
						{user.fName} {user.lName}
					</span>
				</a>
				{user.userName && (
					<a href="#name ">
						<span className="name">@{user.userName}</span>
					</a>
				)}
				<a href="#email">
					<span className="email">{user.email}</span>
				</a>
			</div>
		</li>
	);
};

SideNavUserProfile.propTypes = {
	user: PropTypes.object.isRequired
};
SideNavUserProfile.defaultProps = {
	user: {
		fName: "First",
		lName: "Last",
		userName: "Username",
		email: "Email"
	}
};
export default SideNavUserProfile;
