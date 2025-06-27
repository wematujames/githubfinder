import { useLocation, Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../../context/contextHooks";

const EnsureAuth = () => {
	const location = useLocation();
	const auth = useAuth();
	return auth?.user ? (
		<Outlet />
	) : (
		<Navigate state={{ from: location }} to="/login" replace />
	);
};
export default EnsureAuth;
