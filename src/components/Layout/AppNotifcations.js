import { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { useAuth, useGithub, useUser } from "../../context/contextHooks";

const AppNotifcations = () => {
	const { githubError } = useGithub();
	const { userError, userNotification } = useUser();
	const { authError } = useAuth();

	useEffect(() => {
		if (githubError) M.toast({ html: `${githubError.msg}` });
		if (userError) M.toast({ html: `${userError.msg}` });
		if (authError) M.toast({ html: `${authError.msg}` });
		if (userNotification) M.toast({ html: `${userNotification.msg}` });
	}, [githubError, userError, userNotification, authError]);
	return <Fragment></Fragment>;
};

export default AppNotifcations;
