import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import useAuth from "../hooks/useAuth";

const Layout = () => {
	const { user } = useAuth();
	return (
		<main>
			<Navbar user={user} />
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
