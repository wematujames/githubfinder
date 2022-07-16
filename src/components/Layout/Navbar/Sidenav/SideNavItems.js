import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SideNavItem = () => {
	return (
		<Fragment>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link
					to="#!"
					data-target="user-search-history-modal"
					className="modal-trigger">
					Search History
				</Link>
			</li>
			<li>
				<Link to="#!">Logout</Link>
			</li>
		</Fragment>
	);
};

export default SideNavItem;
