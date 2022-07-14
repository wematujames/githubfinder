import { Fragment } from "react";

import NavItems from "./NavItems";

import UserSearchHistory from "../User/UserSearchHistory";
import UserProfile from "../User/UserProfile";
import SideNav from "./SideNav";
import Dropdown from "./Dropdown";

const Navbar = ({ user }) => {
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">
						Github Finder
					</a>
					<a
						href="#!"
						data-target="mobile-demo"
						className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<NavItems />
				</div>
			</nav>
			<Dropdown />
			<UserSearchHistory />
			{user && user.fName && <UserProfile user={user} />}
			<SideNav />
		</Fragment>
	);
};
export default Navbar;
