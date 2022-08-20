import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import SideNavUserProfile from "./Sidenav/SideNavUserProfile";
import SideNavItems from "./Sidenav/SideNavItems";
import About from "../About";

const SideNav = () => {
	useEffect(() => {
		const elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);

	return (
		<ul className="sidenav" id="mobile-demo">
			<SideNavUserProfile />
			<div className="divider"></div>
			<SideNavItems />
			<About />
		</ul>
	);
};

export default SideNav;
