import React, { Fragment } from "react";

const SideNavItem = () => {
	return (
		<Fragment>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a
					href="#!"
					data-target="user-search-history-modal"
					className="modal-trigger">
					Search History
				</a>
			</li>
			<li>
				<a href="#!">Logout</a>
			</li>
		</Fragment>
	);
};

export default SideNavItem;
