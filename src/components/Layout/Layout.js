import { Outlet } from "react-router-dom";

//comps
import Navbar from "./Navbar";
import Notifications from "./Notifications";

function Layout() {
	return (
		<main className="App">
			<Notifications />
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
}

export default Layout;
