import useGithub from "../hooks/useGithub";

function ClearUsers({ setSearchTerm }) {
	const { clearUsers } = useGithub();

	const clearScreen = () => {
		clearUsers();
		setSearchTerm("");
	};

	return (
		<button
			onClick={clearScreen}
			className="btn block hoverable waves-effect wave-light grey lighten-2 black-text">
			Clear
		</button>
	);
}

export default ClearUsers;
