import "./App.css";

import { getAllTerms, questionHeadding } from "./getQuestion";
import { useEffect, useState } from "react";

const questions = getAllTerms();

function App() {
	const [isAnswerShown, setIsAnswerShown] = useState(false);
	const [isHintShown, setIsHintShown] = useState(false);
	const [currQuestionI, setCurrQuestionI] = useState(0);
	const currQuestion = questions[currQuestionI];

	useEffect(() => {
		setIsAnswerShown(false);
		setIsHintShown(false);
	}, [currQuestionI]);

	const questionHeaddingText = currQuestion?.type
		? questionHeadding(currQuestion?.type)
		: "";
	const question = currQuestion.question;
	const answer = currQuestion.answer;
	let hint = `lecture ${currQuestion.lectureNo}, ${currQuestion?.hint}`.trim();
	if (hint.endsWith(",")) hint = hint.slice(0, -1);
	const slideLink = `${currQuestion?.slideUrl}#slide=id.p${
		currQuestion?.slideNo || 1
	}`;

	return (
		<div className="container">
			<div id="title">
				<h1>احفظ يا طالب</h1>
			</div>
			<div className="main">
				<h3>{questionHeaddingText}:</h3>
				<p className="question">{question}</p>
				<p className={`hint ${!(isHintShown || isAnswerShown) && "blur"}`}>
					Hint: {hint}
				</p>
				<p className={`answer ${!isAnswerShown ? "blur" : ""}`}>{answer}</p>
			</div>
			<div className="btn-grp controls">
				<button
					id="show-hint"
					disabled={isHintShown || isAnswerShown}
					onClick={() => setIsHintShown(true)}
				>
					Hint
				</button>
				{!isAnswerShown && (
					<button
						onClick={() => setIsAnswerShown(true)}
						className="btn-contained"
					>
						Answer
					</button>
				)}
				{isAnswerShown && (
					<a href={slideLink} target="#blank">
						<button className="btn-contained">Open Lecture</button>
					</a>
				)}

				<div className="nav-btn-grp">
					<button
						onClick={() => setCurrQuestionI((prev) => prev - 1)}
						disabled={currQuestionI === 0}
					>
						Before
					</button>
					<button
						onClick={() => setCurrQuestionI((prev) => prev + 1)}
						disabled={currQuestionI === questions.length - 1}
						className="btn-outline"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
