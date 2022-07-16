import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { useAuth, useGithub, useUser } from "../../context/contextHooks";

const AppNotifcations = () => {
	const { githubError } = useGithub();
	const { userError, userNotification } = useUser();
	const { authError } = useAuth();

	useEffect(() => {
		if (githubError) M.toast({ html: `Error: ${githubError.msg}` });
		if (userError) M.toast({ html: `Error: ${userError.msg}` });
		if (authError) M.toast({ html: `Error: ${authError.msg}` });
		if (userNotification)
			M.toast({ html: `Error: ${userNotification.msg}` });
	}, [githubError, userError, userNotification, authError]);
	return <></>;
};

export default AppNotifcations;
