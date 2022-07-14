import React, { useEffect } from "react";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const UserProfile = ({ user }) => {
	useEffect(() => {
		const modal = document.querySelectorAll(".modal2");
		M.Modal.init(modal);
	}, []);

	return (
		<div id="user-profile" className="modal modal2">
			<div className="modal-content">
				<div className="user-view center-align">
					<a href="#user" className="">
						{user.profile_img ? (
							<img
								className="circle center user-avatar"
								src={user}
								alt="user-avatar"
							/>
						) : (
							<i className="material-icons large black-text">
								person_pin
							</i>
						)}
					</a>
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
			</div>
		</div>
	);
};

UserProfile.propTypes = {
	user: PropTypes.object.isRequired
};
UserProfile.propTypes = {
	user: {
		fName: "First",
		lName: "Last",
		userName: "Username",
		email: "Email"
	}
};

export default UserProfile;
