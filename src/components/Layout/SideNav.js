import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import me from "../../dist/images/me.jpg";

const SideNav = ({ user }) => {
	useEffect(() => {
		const elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);
	return (
		<ul class="sidenav" id="mobile-demo">
			<li className="container black-text">
				<div class="user-view center-align">
					<a href="#user">
						<img class="circle center" src={me} alt="user-avatar" />
					</a>
					<a href="#name ">
						<span class="name black-text">
							{user.fName} {user.lName}
						</span>
					</a>
					<a href="#email">
						<span class="email black-text">{user.email}</span>
					</a>
				</div>
			</li>
			<div className="divider"></div>
			<li>
				<a
					href="#!"
					data-target="user-search-history-modal"
					class="modal-trigger">
					Search History
				</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="#!">Logout</a>
			</li>
			<div className="container center side-menu-about">
				<span>Github Finder</span>
				<br />
				<span>V1.0.0</span>
			</div>
		</ul>
	);
};

export default SideNav;
