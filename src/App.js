import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Styling & js
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//Other comps
import Outlet from "./components/Layout/Layout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

//Route protection
import EnsureAuth from "./components/routing/EnsureAuth";

function App() {
	useEffect(() => {
		var modal = document.querySelectorAll(".modal");
		M.Modal.init(modal);

		var elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Outlet />}>
				{/* Open routes */}
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />

				{/* Protected routes */}
				<Route element={<EnsureAuth />}>
					<Route path="/" element={<Home />} />
				</Route>

				{/* Not found */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
export default App;
