import axios from "axios";
import { useState } from "react";

//Other comps
import Home from "./components/pages/Home";
import Navbar from "./components/Navigation/Navbar";

function App() {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const res = await axios.get("https://api.github.com/users");
		setUsers(res.data);
	};

	const searchUsers = async queryStr => {
		const foundUsers = await axios.get(`https://api.github.com/search/users?q=${queryStr}`);
		setUsers(foundUsers.data);
	};

	return (
		<div className="App">
			<Navbar />
			<main className="container">
				<Home users={users} getUsers={getUsers} searchUsers={searchUsers} />
			</main>
		</div>
	);
}
export default App;
