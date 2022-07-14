import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import UserSearchHistoryItem from "./UserSearchHistoryItem";

const Modal = () => {
	useEffect(() => {
		const modal = document.querySelectorAll(".modal");
		M.Modal.init(modal);
	}, []);

	const userSearchItems = ["james", "one", "wemat", "then", "two"];

	return (
		<div id="user-search-history-modal" className="modal">
			<div className="modal-content">
				<div className="collection">
					{userSearchItems.map(searchItem => (
						<UserSearchHistoryItem
							key={searchItem}
							searchItem={searchItem}
						/>
					))}
				</div>
				<a href="#!">Load More...</a>
			</div>
		</div>
	);
};

export default Modal;
