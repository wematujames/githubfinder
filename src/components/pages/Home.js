import { Fragment } from "react";
import SearchForm from "../Users/SearchForm";
import Users from "../Users/Users";

function Home() {
	return (
		<Fragment>
			<SearchForm />
			<Users />
		</Fragment>
	);
}
export default Home;
