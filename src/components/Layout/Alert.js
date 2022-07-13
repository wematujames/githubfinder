import React from "react";
import PropTypes from "prop-types";

function Alert({ msg }) {
	return (
		<div style={styles.alertWrapper}>
			<i className="material-icons small">info</i>
			<span style={styles.msg}>{msg}</span>
			<i className="material-icons" style={styles.close}>
				close
			</i>
		</div>
	);
}

const styles = {
	alertWrapper: {
		border: " 2px solid red",
		borderRadius: "5px",
		padding: "0.7rem 1.2rem",
		margin: "1rem 0.5rem",
		display: "flex",
		alignItems: "center"
	},
	msg: {
		marginLeft: "0.5rem",
		flex: 1
	},
	close: {
		cursor: "pointer"
	}
};

Alert.propTypes = {
	msg: PropTypes.string.isRequired
};
Alert.defaultProps = {
	msg: "An error occured"
};

export default Alert;
