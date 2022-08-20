import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUser } from "../../context/contextHooks";

const UserSearchHistoryItem = ({ searchItem: { searchTerm, _id } }) => {
	const { removeUserSearchTerm } = useUser();

	const removeItem = () => {
		removeUserSearchTerm(_id);
	};

	return (
		<Link to="#!" className="collection-item light-blue-text text-darken-1">
			{searchTerm}
			<i
				className="material-icons right red-text text-darken-1"
				onClick={removeItem}>
				close
			</i>
		</Link>
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
