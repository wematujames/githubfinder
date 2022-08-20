import { useAuth } from "../../../context/contextHooks";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

const NavItems = () => {
	const { user } = useAuth();

	return (
		<ul className="right hide-on-med-and-down">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				{user?.fName && (
					<>
						<Link
							to="#!"
							className="dropdown-trigger"
							data-target="user-dropdown">
							<span style={{ display: "flex" }}>
								{user.fName}
								<i className="material-icons">
									keyboard_arrow_down
								</i>
							</span>
						</Link>
						<Dropdown />
					</>
				)}
			</li>
		</ul>
	);
};

export default NavItems;
