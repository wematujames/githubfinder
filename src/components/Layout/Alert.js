import React from "react";
// import PropTypes from "prop-types";

import useAlert from "../hooks/useAlert";

const Alert = ({ msg }) => {
	const { clearAlert } = useAlert();
	return (
		<div className="alert-wrapper">
			<i className="material-icons small">info</i>
			<span className="left-align alert-msg">{msg.message || msg}</span>
			<i onClick={clearAlert} className="material-icons close">
				close
			</i>
		</div>
	);
};

// Alert.propTypes = {
// 	msg: PropTypes.string.isRequired
// };
Alert.defaultProps = {
	msg: "An error occured"
};
export default Alert;
