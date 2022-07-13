import React from "react";
import useAuth from "../hooks/useAuth";

const SideNav = () => {
	const { user } = useAuth();

	return (
		<ul id="slide-out" className="sidenav">
			<li>
				<div className="user-view">
					<a href="#user">
						<img className="circle" src="" alt="avatar" />
					</a>
					<a href="#name">
						<span className="black-text name">
							{user.fName} {user.lName}
						</span>
					</a>
					<a href="#email">
						<span className="black-text email">{user.email}</span>
					</a>
				</div>
			</li>
			<li>
				<div className="divider"></div>
			</li>
		</ul>
	);
};

export default SideNav;
