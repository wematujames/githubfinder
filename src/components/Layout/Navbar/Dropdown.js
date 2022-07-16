import { useEffect } from "react";
import { Link } from "react-router-dom";

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
				<Link
					to="#!"
					data-target="user-profile"
					className="modal-trigger light-blue-text text-darken-1">
					Profile
				</Link>
			</li>
			<li>
				<Link
					to="#!"
					data-target="user-search-history-modal"
					className="modal-trigger light-blue-text text-darken-1">
					History
				</Link>
			</li>
			<li className="divider" tabIndex="-1"></li>
			<li>
				<Link
					to="#!"
					className="light-blue-text text-darken-1"
					onClick={logOut}>
					Logout
				</Link>
			</li>
		</ul>
	);
};

export default Dropdown;
