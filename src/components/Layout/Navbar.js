import React from "react";
import useAuth from "../hooks/useAuth";

function Navbar() {
	const { user, logOut } = useAuth();

	const guest = (
		<ul className="nav-items">
			<li className="nav-item">Home</li>
			<li className="nav-item">About</li>
		</ul>
	);

	const logoutUser = () => logOut();

	return (
		<nav>
			<div className="nav-wrapper">
				<h4 className="logo">GitHub Finder</h4>
				{user && (
					<ul className="nav-items">
						<li className="nav-item">Home</li>
						<li className="nav-item">About</li>
						<li onClick={logoutUser} className="nav-item">
							Logout
						</li>
					</ul>
				)}
				{!user && guest}
			</div>
		</nav>
	);
}
export default Navbar;
