import { useEffect } from "react";

import Search from "../Utility/Search";
import Users from "../Users/Users";

function Home({ searchUsers, getUsers, users }) {
	useEffect(() => {
		getUsers();
		//eslint-disable-next-line
	}, []);

	return (
		<div className="full-width">
			<Search searchUsers={searchUsers} />
			<Users users={users} />
		</div>
	);
}
export default Home;
