import { Fragment } from "react";

import NavItems from "./NavItems";

import Modal from "./Modal";
import SideNav from "./SideNav";

const Navbar = ({ user }) => {
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">
						Github Finder
					</a>
					<a
						href="#"
						data-target="mobile-demo"
						className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<NavItems />
				</div>
			</nav>
			<Modal />
			{user && user.fName && <SideNav user={user} />}
		</Fragment>
	);
};
export default Navbar;
