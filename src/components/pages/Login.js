import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";

function Login() {
	const { user, login, loadUser, authError } = useAuth();
	const { setAlert } = useAlert();
	const [loginInfo, setLoginInfo] = useState({ user: "", password: "" });

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = async e => {
		e.preventDefault();
		if (!loginInfo.password || !loginInfo.user) {
			return;
		}
		login(loginInfo);
	};

	const handleChange = e =>
		setLoginInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

	useEffect(
		function () {
			if (authError) setAlert(authError);
			//user or token
			if (user && localStorage.token) navigate(from, { replace: true });
			else if (localStorage.token && !user) {
				loadUser();
			}
		},
		//eslint-disable-next-line
		[user, localStorage.token, authError]
	);

	return (
		<section id="login" className="comp-wrapper block">
			<form
				onSubmit={handleSubmit}
				id="login-form"
				className="form round-sm">
				<div className="form-header" id="login-form-header">
					<h3>Login</h3>
				</div>
				<input
					className="form-input round-sm m-y"
					type="text"
					id="user"
					name="user"
					placeholder="Username or email"
					value={loginInfo.user}
					onChange={handleChange}
				/>
				<input
					className="form-input round-sm"
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					value={loginInfo.password}
					onChange={handleChange}
				/>
				<button type="submit" className="btn round-sm m-y">
					Login
				</button>
			</form>
		</section>
	);
}
export default Login;
