import { Fragment } from "react";

import SideNav from "./SideNav";
import NavItems from "./NavItems";

function Navbar() {
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">
						Gihub Finder
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
}
export default Navbar;
