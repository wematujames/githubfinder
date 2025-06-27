import { Routes, Route } from "react-router-dom";

//Other comps
import Outlet from "./components/Layout/Layout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import User from "./components/Users/User";
import NotFound from "./components/pages/NotFound";

//Route protection
import About from "./components/Layout/About";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Outlet />}>
				{/* Open routes */}
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="/about" element={<About />} />
				{/* Protected routes */}
				{/* <Route element={<EnsureAuth />}> */}
					<Route path="/" element={<Home />} />
					<Route path="/user/:username" element={<User />} />
				{/* </Route> */}

				{/* Not found */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
export default App;
