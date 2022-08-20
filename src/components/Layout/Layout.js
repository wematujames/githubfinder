import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import AppNotifcations from "./AppNotifcations";

const Layout = () => {
	return (
		<main>
			<Navbar />
			<AppNotifcations />
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
