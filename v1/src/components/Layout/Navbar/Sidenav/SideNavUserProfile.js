import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/contextHooks";

const SideNavUserProfile = () => {
	const { user } = useAuth();

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
