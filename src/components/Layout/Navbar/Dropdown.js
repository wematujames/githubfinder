import { useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import { useAuth } from "../../../context/contextHooks";

const Dropdown = () => {
	const { logOut } = useAuth();
	useEffect(() => {
		const elems = document.querySelectorAll(".dropdown-trigger");
		M.Dropdown.init(elems, {
			coverTrigger: false,
			closeOnClick: true
		});
	}, []);

	return (
		<ul id="user-dropdown" className="dropdown-content">
			<li>
				<a
					href="#!"
					data-target="user-profile"
					className="modal-trigger">
					Profile
				</a>
			</li>
			<li>
				<a
					href="#!"
					data-target="user-search-history-modal"
					className="modal-trigger">
					History
				</a>
			</li>
			<li className="divider" tabIndex="-1"></li>
			<li>
				<a href="#!" onClick={logOut}>
					Logout
				</a>
			</li>
		</ul>
	);
};

export default Dropdown;
