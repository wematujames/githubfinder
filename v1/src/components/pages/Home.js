import { Fragment } from "react";

import SearchForm from "../Users/SearchForm";
import Users from "../Users/Users";

const Home = () => {
	return (
		<Fragment>
			<SearchForm />
			<Users />
		</Fragment>
	);
};
export default Home;
