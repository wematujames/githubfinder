import React from "react";
import useAuth from "../hooks/useAuth";

function SideNav() {
	const { user: profile_img } = useAuth();

	return (
		<ul id="slide-out" className="sidenav">
			<li>
				<div className="user-view">
					<a href="#user">
						<img
							className="circle"
							src={profile_img || ""}
							alt="avatar"
						/>
					</a>
					<a href="#name">
						<span className="black-text name">John Doe</span>
					</a>
					<a href="#email">
						<span className="white-text email">
							jdandturk@gmail.com
						</span>
					</a>
				</div>
			</li>
			<li>
				<div className="divider"></div>
			</li>
		</ul>
	);
}

export default SideNav;
