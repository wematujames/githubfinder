import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import useUser from "../hooks/useUser";

import PreLoader from "../Layout/PreLoader";
import UserSearchHistoryItem from "./UserSearchHistoryItem";

const Modal = () => {
	const { searchHistory, getSearchHistory, loading, error, notification } =
		useUser();

	useEffect(() => {
		//Initialise modal
		const modal = document.querySelectorAll(".modal");
		M.Modal.init(modal);

		//Notify user of errors/successful actions
		if (error) M.toast({ html: `Error: ${error}` });
		if (notification) M.toast({ html: `${notification}` });

		//Get User history
		getSearchHistory();
		//eslint-disable-next-line
	}, [notification]);

	return (
		<div id="user-search-history-modal" className="modal">
			<div className="modal-content">
				<h4>Your Search History</h4>
				{loading ? (
					<PreLoader />
				) : searchHistory.length === 0 ? (
					<h6> No Item Found </h6>
				) : (
					<div className="collection">
						{searchHistory.map(searchItem => (
							<UserSearchHistoryItem
								key={searchItem._id}
								searchItem={searchItem}
							/>
						))}
					</div>
				)}
				{/* <a href="#!">Load More...</a> */}
			</div>
		</div>
	);
};

export default Modal;
