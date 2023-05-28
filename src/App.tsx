import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const questionHeadding = "Replace with the scientific term";
	const question =
		"Problems identified when team members do not follow applicable standards, recorded processes, or procedures.";
	return (
		<>
			<h2>{questionHeadding}</h2>
			<h1>{question}</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
