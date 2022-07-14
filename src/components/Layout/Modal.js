import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import UserSearchHistoryItem from "../Users/UserSearchHistoryItem";

const Modal = () => {
	useEffect(() => {
		const modal = document.querySelectorAll(".modal");
		M.Modal.init(modal);
	}, []);

	const userSearchItems = ["james", "one", "james", "one", "james"];

	return (
		<div id="user-search-history-modal" class="modal">
			<div class="modal-content">
				<div className="collection">
					{userSearchItems.map(searchItem => (
						<UserSearchHistoryItem searchItem={searchItem} />
					))}
				</div>
				<a href="#!">Load More...</a>
			</div>
		</div>
	);
};

export default Modal;
