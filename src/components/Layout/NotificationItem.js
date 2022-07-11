import React from "react";

function NotificationItem({ notification: { msg, type } }) {
	return (
		<div className={`notification-content round-sm ${type}`}>
			<span>some notification notification notification</span>
			<span className="close-btn err">x</span>
		</div>
	);
}

export default NotificationItem;
