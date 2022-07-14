import React from "react";

import Dropdown from "./Dropdown";

const NavItems = () => {
	return (
		<ul className="right hide-on-med-and-down">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a
					href="#!"
					className="dropdown-trigger"
					data-target="user-dropdown">
					<i className="material-icons">keyboard_arrow_down</i>
				</a>
				<Dropdown />
			</li>
		</ul>
	);
};

export default NavItems;
