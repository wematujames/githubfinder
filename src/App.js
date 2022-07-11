//Other comps
import Home from "./components/pages/Home";
import Navbar from "./components/Navigation/Navbar";

function App() {
	return (
		<main className="App">
			<Navbar />
			<div className="container">
				<Home />
			</div>
		</main>
	);
}
export default App;
