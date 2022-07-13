import { Fragment } from "react";

import NavItems from "./NavItems";
import SideNav from "./SideNav";

const Navbar = () => {
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">
						Github Finder
					</a>
					<a
						href="#!"
						data-target="slide-out"
						className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<NavItems />
				</div>
			</nav>
			<SideNav />
		</Fragment>
	);
};
export default Navbar;
