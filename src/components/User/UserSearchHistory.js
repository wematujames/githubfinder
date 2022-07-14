import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import useAuth from "../hooks/useAuth";

import PreLoader from "../Layout/PreLoader";
import UserSearchHistoryItem from "./UserSearchHistoryItem";

const Modal = () => {
	const { searchHistory, getSearchHistory, loading } = useAuth();

	useEffect(() => {
		const modal = document.querySelectorAll(".modal");
		M.Modal.init(modal);
		//Get User history
		getSearchHistory();
		//eslint-disable-next-line
	}, []);

	return (
		<div id="user-search-history-modal" className="modal">
			<div className="modal-content">
				<h4>Your Search History</h4>
				<div className="collection">
					{loading ? (
						<PreLoader />
					) : (
						searchHistory.map(searchItem => (
							<UserSearchHistoryItem
								key={searchItem._id}
								searchItem={searchItem}
							/>
						))
					)}
				</div>
				{/* <a href="#!">Load More...</a> */}
			</div>
		</div>
	);
};

export default Modal;
