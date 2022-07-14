import React from "react";
import PropTypes from "prop-types";

const UserSearchHistoryItem = ({ searchItem }) => {
	return (
		<a href="#!" className="collection-item">
			{searchItem}
		</a>
	);
};

UserSearchHistoryItem.protoTypes = {
	searchItem: PropTypes.string.isRequired
};
UserSearchHistoryItem.defaultProps = {
	searchItem: ""
};

export default UserSearchHistoryItem;
