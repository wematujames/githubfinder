import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import useAuth from "../../hooks/useAuth";

import SideNavUserProfile from "./Sidenav/SideNavUserProfile";
import SideNavItems from "./Sidenav/SideNavItems";
import About from "../About";

const SideNav = () => {
	const { user } = useAuth();

	useEffect(() => {
		const elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);

	return (
		<ul className="sidenav" id="mobile-demo">
			<SideNavUserProfile user={user} />
			<div className="divider"></div>
			<SideNavItems />
			<About />
		</ul>
	);
};

export default SideNav;
