import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App"; //App
import "./dist/css/index.css"; //CSS
// Context
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import UserState from "./context/user/UserState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<AuthState>
				<UserState>
					<GithubState>
						<AlertState>
							<Routes>
								<Route path="/*" element={<App />} />
							</Routes>
						</AlertState>
					</GithubState>
				</UserState>
			</AuthState>
		</Router>
	</React.StrictMode>
);
