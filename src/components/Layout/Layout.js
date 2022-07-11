import { Outlet } from "react-router-dom";

//comps
import Navbar from "./Navbar";

function Layout() {
	return (
		<main className="App">
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
}

export default Layout;
