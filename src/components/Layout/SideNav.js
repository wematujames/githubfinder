import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import useAuth from "../hooks/useAuth";

import About from "./About";
import SideNavUserProfile from "./Sidenav/SideNavUserProfile";

const SideNav = () => {
	const { user } = useAuth();

	useEffect(() => {
		const elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);

	return (
		<ul className="sidenav" id="mobile-demo">
			{user?.firstName && <SideNavUserProfile user={user} />}
			<div className="divider"></div>
			<SideNav />
			<About />
		</ul>
	);
};

export default SideNav;
