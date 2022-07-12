import useAlert from "../hooks/useAlert";

import React, { useState } from "react";
import SearchForm from "../Utility/SearchForm";
import ClearBtn from "./ClearUsers";

function SearchFrom() {
	const [searchTerm, setSearchTerm] = useState("");
	const { alert } = useAlert();

	return (
		<>
			{alert && <div className="alert">{alert}</div>}
			<SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<ClearBtn setSearchTerm={setSearchTerm} />
		</>
	);
}

export default SearchFrom;
