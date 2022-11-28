import "./App.css";
import Data from "./components/Data";
import Head from "./components/Head";
import { IpDataProvider } from "./Context/IpDataContext";

function App() {
	return (
		<div className="App">
			<IpDataProvider>
				<Head />
				<Data />
			</IpDataProvider>
		</div>
	);
}

export default App;
