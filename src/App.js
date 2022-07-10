// Local Imports
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";

//Other comps
import Home from "./components/pages/Home";
import Navbar from "./components/Navigation/Navbar";

function App() {
	return (
		<AuthState>
			<GithubState>
				<AlertState>
					<div className="App">
						<Navbar />
						<main className="container">
							<Home />
						</main>
					</div>
				</AlertState>
			</GithubState>
		</AuthState>
	);
}
export default App;
