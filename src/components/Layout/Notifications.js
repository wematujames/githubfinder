import React from "react";
import NotificationItem from "./NotificationItem";

function Notifications({ notifications }) {
	return (
		<div className="notification-wrapper show">
			{notifications.map(n => (
				<NotificationItem notification={n} key={n.id} />
			))}
		</div>
	);
}
Notifications.defaultProps = {
	notifications: [
		{ id: 1, msg: "tes1", type: "n-err" },
		{ id: 2, msg: "tes2", type: "n-warn" },
		{ id: 3, msg: "tes3", type: "n-notify" },
		{ id: 4, msg: "tes4", type: "n-general" }
	]
};

export default Notifications;
