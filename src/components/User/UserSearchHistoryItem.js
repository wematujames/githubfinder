import React from "react";
import PropTypes from "prop-types";

import useUser from "../hooks/useUser";

const UserSearchHistoryItem = ({ searchItem: { searchTerm, _id } }) => {
	const { removeUserSearchTerm } = useUser();

	const removeItem = () => {
		removeUserSearchTerm(_id);
	};
	return (
		<a href="#!" className="collection-item">
			{searchTerm}
			<i className="material-icons right" onClick={removeItem}>
				close
			</i>
		</a>
	);
};
UserSearchHistoryItem.protoTypes = {
	searchItem: PropTypes.object.isRequired
};
UserSearchHistoryItem.defaultProps = {
	searchItem: {
		searchTerm: ""
	}
};
export default UserSearchHistoryItem;
