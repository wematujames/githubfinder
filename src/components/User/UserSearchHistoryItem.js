import React from "react";
import PropTypes from "prop-types";

const UserSearchHistoryItem = ({ searchItem: { searchTerm } }) => {
	return (
		<a href="#!" className="collection-item">
			{searchTerm}
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
