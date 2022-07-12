import React from "react";

import useAuth from "../hooks/useAuth";

function NavItems() {
	const { logOut } = useAuth();

	const logoutUser = () => logOut();

	return (
		<ul className="right hide-on-med-and-down">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="#!" onClick={logoutUser}>
					Logout
				</a>
			</li>
		</ul>
	);
}

export default NavItems;
