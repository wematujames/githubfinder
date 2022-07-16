import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/contextHooks";

const Register = () => {
	const navigate = useNavigate(); //Navigation
	const { user, registerUser, loadUser, token, setAuthError } = useAuth();
	const [registerInfo, setRegisterInfo] = useState({
		fName: "",
		lName: "",
		userName: "",
		email: "",
		password: "",
		password2: ""
	});

	//update registration info
	const handleChange = e =>
		setRegisterInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));

	//Handle form submission
	const handleSubmit = async e => {
		e.preventDefault();
		//All fields completed
		const allfieldsCompeleted = Object.values(registerInfo).every(
			value => !!value
		);
		if (!allfieldsCompeleted)
			return setAuthError({
				msg: "Please complete all fields",
				type: "warning"
			}); // check all fields complete
		if (registerInfo.password.length < 8)
			return setAuthError({
				msg: "Password can't be less than 8 characters.",
				type: "warning"
			}); //Check passord <= 8
		if (registerInfo.password !== registerInfo.password2)
			return setAuthError({
				msg: "Password do not match",
				type: "warning"
			}); // Passwords match
		//Finally attempt to register user
		registerUser(registerInfo);
	};

	useEffect(
		function () {
			if (token) loadUser();
			if (user) navigate("/", { replace: true });
		},
		//eslint-disable-next-line
		[user, localStorage.token]
	);

	return (
		<section className="form-wrapper">
			<form
				onSubmit={handleSubmit}
				id="register"
				className="form center z-depth-2 row">
				<div className="form-header">
					<h3>Register</h3>
				</div>
				<div className="row">
					<div className="input-field col l6 m6 s12">
						<input
							id="fName"
							type="text"
							name="fName"
							value={registerInfo.fName}
							onChange={handleChange}
						/>
						<label htmlFor="fName">Firstname</label>
					</div>
					<div className="input-field col l6 m6 s12">
						<input
							id="lName"
							type="text"
							name="lName"
							value={registerInfo.lName}
							onChange={handleChange}
						/>
						<label htmlFor="lName">Lastname</label>
					</div>
					<div className="input-field col s12">
						<input
							id="userName"
							type="text"
							name="userName"
							value={registerInfo.userName}
							onChange={handleChange}
						/>
						<label htmlFor="userName">Username</label>
					</div>
					<div className="input-field col s12">
						<input
							id="email"
							type="email"
							name="email"
							value={registerInfo.email}
							onChange={handleChange}
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field col l6 m6 s12">
						<input
							id="password"
							type="password"
							name="password"
							value={registerInfo.password}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password</label>
					</div>
					<div className="input-field col l6 m6 s12">
						<input
							id="password2"
							type="password"
							name="password2"
							value={registerInfo.password2}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password</label>
					</div>
				</div>
				<button type="submit" className="btn my full-width">
					Register
				</button>
				Already have an account? <a href="/login"> Login</a>
			</form>
		</section>
	);
};
export default Register;
