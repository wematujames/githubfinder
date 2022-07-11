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
		<div>
			<form onSubmit={handleSubmit} id="login-form">
				<label htmlFor="user">Username/Email</label>
				<input
					type="text"
					id="user"
					name="user"
					placeholder=""
					value={loginInfo.user}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="text"
					id="password"
					name="password"
					placeholder=""
					value={loginInfo.password}
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
