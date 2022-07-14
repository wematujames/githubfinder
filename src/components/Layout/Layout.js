import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

const Layout = () => {
	return (
		<main>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
