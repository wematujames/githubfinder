import React from "react";
import spinner from "../../dist/images/spinner.gif";

function Loader() {
	return (
		<div>
			<img src={spinner} alt="loading" />
		</div>
	);
}
export default Loader;
