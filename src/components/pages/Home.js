import SearchUsers from "../Users/SearchUsers";
import Users from "../Users/Users";

function Home() {
	return (
		<div className="block">
			<SearchUsers />
			<Users />
		</div>
	);
}
export default Home;
