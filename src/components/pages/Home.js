import { Fragment } from "react";
import { Link } from "react-router-dom";

import SearchForm from "../Users/SearchForm";
import Users from "../Users/Users";

const Home = () => {
	return (
		<Fragment>
			<Link to="/user?name=wematu">Wematu</Link>
			<SearchForm />
			<Users />
		</Fragment>
	);
};
export default Home;
