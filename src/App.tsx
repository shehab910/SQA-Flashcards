import './App.css';

import { useEffect, useState } from 'react';
import { getAllQuestions, getSlideUrl, saveQuestions } from './getQuestion';
import { Question } from './data';

const repoUrl = 'https://github.com/shehab910/SQA-Flashcards';
const makeIssueUrl = (questionObj: Question) => {
	const { id: questionID, question, questionHeader } = questionObj;
	const title = encodeURIComponent(`Slide number for question ${questionID}`);
	const label = encodeURIComponent('slide number missing');
	const body = encodeURIComponent(
		`Please add the slide number for question with id: **${questionID}**

# Question ${questionID}:
### ${questionHeader}
${question}
# Answer found in slide number:
	slideNo: <PUT SLIDE NUMBER HERE>
`
	);
	return `${repoUrl}/issues/new?labels=${label}&title=${title}&body=${body}`;
};

const questions = getAllQuestions();

function App() {
	const [isAnswerShown, setIsAnswerShown] = useState(false);
	const [isHintShown, setIsHintShown] = useState(false);
	const [currQuestionI, setCurrQuestionI] = useState(0);
	const currQuestion = questions[currQuestionI];

	useEffect(() => {
		setIsAnswerShown(false);
		setIsHintShown(false);
	}, [currQuestionI]);

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
			: makeIssueUrl(currQuestion);
	const slideLinkBtnText =
		currQuestion.slideNo > 0
			? `Open Lecture ${currQuestion.lectureNo} Slide ${currQuestion.slideNo}`
			: 'You know the slide? Contribute now!';

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

				<button
					className="btn-contained"
					onClick={() => saveQuestions(questions)}
				>
					Save Progress
				</button>

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
