import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App"; //App
import "./dist/css/index.css"; //CSS
// Context
import GithubState from "./context/github/GithubState";
import AuthState from "./context/auth/AuthState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<AuthState>
				<GithubState>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</GithubState>
			</AuthState>
		</Router>
	</React.StrictMode>
);
