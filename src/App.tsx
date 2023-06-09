import './App.css';

import { useEffect, useState, useCallback } from 'react';
import {
	deleteLocalQuestions,
	getAllQuestions,
	getSlideUrl,
	saveQuestions,
} from './getQuestion';
import { makeSlideNoIssueUrl } from './issueHandler';

const questions = getAllQuestions();

function App() {
	const [isAnswerShown, setIsAnswerShown] = useState(false);
	const [isHintShown, setIsHintShown] = useState(false);
	const [isLastQuestion, setIsLastQuestion] = useState(false);
	const [currQuestionI, setCurrQuestionI] = useState(0);
	const currQuestion = questions[currQuestionI];

	const saveBtnHandler = useCallback(() => {
		if (isLastQuestion) {
			deleteLocalQuestions();
			window.location.reload();
		} else {
			saveQuestions(questions);
		}
	}, [isLastQuestion]);

	useEffect(() => {
		setIsAnswerShown(false);
		setIsHintShown(false);
		if (currQuestionI === questions.length - 1 || questions.length <= 1) {
			saveQuestions([currQuestion]);
			setIsLastQuestion(true);
		}
	}, [currQuestion, currQuestionI]);

	const questionHeaddingText = currQuestion.questionHeader;
	const question = currQuestion.question;
	const answer = currQuestion.answer;
	let hint =
		`lecture ${currQuestion.lectureNo}, ${currQuestion?.hint}`.trim();
	if (hint.endsWith(',')) hint = hint.slice(0, -1);

	const slideLink =
		currQuestion.slideNo > 0
			? `${getSlideUrl(currQuestion.lectureNo)}#slide=id.p${
					currQuestion.slideNo || 1
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }`
			: makeSlideNoIssueUrl(currQuestion);
	const slideLinkBtnText =
		currQuestion.slideNo > 0
			? `Open Lecture ${currQuestion.lectureNo} Slide ${currQuestion.slideNo}`
			: 'You know the slide? Contribute now!';
	const saveBtnText = isLastQuestion
		? 'خلصت يا دحيح 😉، ابدأ من الاول'
		: 'Save Progress';

	const nextQuestionHandler = () => {
		currQuestion.solved = true;
		setCurrQuestionI((prev) => prev + 1);
	};

	return (
		<div className="container">
			<div id="title">
				<h1>احفظ يا طالب</h1>
			</div>
			<div className="main">
				<h3>{questionHeaddingText}:</h3>
				<p className="question">{question}</p>
				<p
					className={`hint ${
						!(isHintShown || isAnswerShown) && 'blur'
					}`}
				>
					Hint: {hint}
				</p>
				<p className={`answer ${!isAnswerShown ? 'blur' : ''}`}>
					{answer}
				</p>
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
						<button className="btn-contained">
							{slideLinkBtnText}
						</button>
					</a>
				)}

				<button className="btn-contained" onClick={saveBtnHandler}>
					{saveBtnText}
				</button>

				<div className="nav-btn-grp">
					<button
						onClick={() => setCurrQuestionI((prev) => prev - 1)}
						disabled={currQuestionI === 0}
					>
						Before
					</button>
					<button
						onClick={nextQuestionHandler}
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
