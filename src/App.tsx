import { useState } from "react";
import "./App.css";

function App() {
	const [isAnswerShown, setIsAnswerShown] = useState(false);
	const [isHintShown, setIsHintShown] = useState(false);
	const questionHeadding = "Replace with the scientific term";
	const question =
		"Problems identified when team members do not follow applicable standards, recorded processes, or procedures.";
	const answer = "Noncompliance";
	const hint = "applicable standards, recorded processes, or procedures.";
	const slideLink = "https://www.google.com";
	return (
		<>
			<div id="title">
				<h1>احفظ يا طالب</h1>
			</div>
			<div className="main">
				<h3>{questionHeadding}:</h3>
				<h2>{question}</h2>
				<p className={`hint ${!(isHintShown || isAnswerShown) && "blur"}`}>
					Hint: {hint}
				</p>
				<p className={`answer ${!isAnswerShown ? "blur" : ""}`}>{answer}</p>
			</div>
			<div className="btn-grp controls ">
				<button
					id="show-hint"
					disabled={isHintShown || isAnswerShown}
					onClick={() => setIsHintShown(true)}
				>
					هممم
				</button>
				{!isAnswerShown && (
					<button
						onClick={() => setIsAnswerShown(true)}
						className="btn-contained"
					>
						الاجابة
					</button>
				)}
				{isAnswerShown && (
					<a href={slideLink} target="#blank">
						<button className="btn-contained">وريني المحاضرة</button>
					</a>
				)}

				<div className="nav-btn-grp">
					<button>ثواني كدا</button>
					<button className="btn-outline">البعده</button>
				</div>
			</div>
		</>
	);
}

export default App;
