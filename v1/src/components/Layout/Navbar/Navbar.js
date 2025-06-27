import { Fragment } from "react";
import { Link } from "react-router-dom";

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
					<Link to="/" className="brand-logo">
						Github Finder
					</Link>
					{user?.fName && (
						<Link
							to="#!"
							data-target="mobile-demo"
							className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</Link>
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
