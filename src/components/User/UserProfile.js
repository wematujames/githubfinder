import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

import { useAuth } from "../../context/contextHooks";

const UserProfile = () => {
	const { user } = useAuth();

	useEffect(() => {
		const modal = document.querySelectorAll(".modal2");
		M.Modal.init(modal);
	}, []);

	return (
		<div id="user-profile" className="modal modal2">
			<div className="modal-content">
				<div className="user-view center-align">
					<div href="#!">
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
					</div>
					<Link to="#name ">
						<span className="name">
							{user.fName} {user.lName}
						</span>
					</Link>
					{user.userName && (
						<Link to="#name ">
							<span className="name">@{user.userName}</span>
						</Link>
					)}
					<Link to="#email">
						<span className="email">{user.email}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

UserProfile.propTypes = {
	user: PropTypes.object.isRequired
};
UserProfile.defaultProps = {
	user: {
		fName: "First",
		lName: "Last",
		userName: "Username",
		email: "Email"
	}
};

export default UserProfile;
