import React from "react";

import useAuth from "../hooks/useAuth";

const NavItems = () => {
	const { logOut } = useAuth();

	return (
		<ul className="right hide-on-med-and-down">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="#!" onClick={logOut}>
					Logout
				</a>
			</li>
		</ul>
	);
};

export default NavItems;
