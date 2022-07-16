import { Fragment } from "react";

import NavItems from "./NavItems";

import UserSearchHistory from "../../User/UserSearchHistory";
import UserProfile from "../../User/UserProfile";
import SideNav from "./SideNav";

import { useAuth } from "../../../context/contextHooks";

const Navbar = () => {
	const { user } = useAuth();
	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo">
						Github Finder
					</a>
					{user?.fName && (
						<a
							href="#!"
							data-target="mobile-demo"
							className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
					)}
					<NavItems />
				</div>
			</nav>
			{user?.fName && (
				<>
					<UserSearchHistory />
					<UserProfile />
					<SideNav />
				</>
			)}
		</Fragment>
	);
};
export default Navbar;
