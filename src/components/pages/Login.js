import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import Alert from "../Layout/Alert";

const Login = () => {
	const { user, login, loadUser, authError, token } = useAuth();
	const { setAlert, alert } = useAlert();
	const [loginInfo, setLoginInfo] = useState({ user: "", password: "" });

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = async e => {
		e.preventDefault();
		if (!loginInfo.password || !loginInfo.user) {
			return setAlert("Please complete all fields");
		}
		login(loginInfo);
	};

	const handleChange = e =>
		setLoginInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

	useEffect(
		function () {
			if (authError) setAlert(authError);
			if (token) loadUser();
			if (user) navigate(from, { replace: true });
		},
		//eslint-disable-next-line
		[user, token, authError]
	);

	return (
		<section className="form-wrapper">
			<form
				onSubmit={handleSubmit}
				id="login"
				className="form center z-depth-2">
				<div className="form-header">
					<h3>Login</h3>
				</div>
				{alert && <Alert msg={alert} />}
				<div className="row">
					<div className="input-field col s12">
						<input
							id="user"
							type="text"
							name="user"
							className="validate"
							value={loginInfo.user}
							onChange={handleChange}
						/>
						<label htmlFor="user">Email</label>
					</div>
					<div className="input-field col s12">
						<input
							id="password"
							type="password"
							name="password"
							value={loginInfo.password}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password</label>
					</div>
					<button type="submit" className="btn my full-width col l12">
						Login
					</button>
				</div>
				<span>
					Don't have an account? <a href="/register"> Register</a>
				</span>
			</form>
		</section>
	);
};
export default Login;
