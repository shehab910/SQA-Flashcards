import { getAllQuestions, getSlideUrl } from './getQuestion';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import ReactGA from 'react-ga4';
import { makeSlideNoIssueUrl } from './issueHandler';
import './App.css';

const allQuestions = getAllQuestions();

function App() {
	const TRACKING_ID = `G-XNKNQ85EBF`;
	ReactGA.initialize(TRACKING_ID);

	const [isAnswerShown, setIsAnswerShown] = useState(false);
	const [isHintShown, setIsHintShown] = useState(false);
	const [isLastQuestion, setIsLastQuestion] = useState(false);
	const [currQuestionI, setCurrQuestionI] = useState(0);
	const [questions, setQuestions] = useState([...allQuestions]);
	const currQuestion = questions[currQuestionI];

	useEffect(() => {
		ReactGA.send({
			hitType: 'pageview',
			page: window.location.pathname,
			title: window.document.title,
		});
	}, []);

	useEffect(() => {
		setIsAnswerShown(false);
		setIsHintShown(false);
		if (currQuestionI === questions.length - 1 || questions.length <= 1) {
			// saveQuestions([currQuestion]);
			setIsLastQuestion(true);
		}
	}, [currQuestion, currQuestionI, questions.length]);

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
		? 'خلصت يا دحيح 😉، اللي بعده'
		: 'Save Progress';

	const nextQuestionHandler = () => {
		currQuestion.solved = true;
		setCurrQuestionI((prev) => prev + 1);
	};

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		ReactGA.event({
			category: 'Select Lecture',
			action: 'Select Lecture',
			label: e.target.value,
			value: parseInt(e.target.value),
		});
		const lecNo = parseInt(e.target.value);

		const newQuestions =
			lecNo === 0
				? [...allQuestions]
				: allQuestions.filter((q) => q.lectureNo === lecNo);

		newQuestions.forEach((q, i) => {
			q.id = i;
		});
		setCurrQuestionI(0);
		setQuestions(newQuestions);
	};

	return (
		<div className="container">
			<div id="title">
				<h1>احفظ يا طالب</h1>
				<select
					title="Lecture Number"
					name="lec"
					id="lec"
					onChange={handleSelect}
				>
					<option value="0">All Lectures</option>
					<option value="1">Lec 1</option>
					<option value="2">Lec 2</option>
					<option value="3">Lec 3</option>
					<option value="4">Lec 4</option>
					<option value="5">Lec 5</option>
					<option value="6">Lec 6</option>
					<option value="7">Lec 7</option>
					<option value="8">Lec 8</option>
					<option value="100">6 or 7 or 8</option>
				</select>
				<p>{`${currQuestionI + 1} / ${questions.length}`}</p>
			</div>
			<div className="main">
				<h3>{questionHeaddingText}:</h3>
				<p className="question">{question}</p>
				<p
					className={`hint ${
						!(isHintShown || isAnswerShown) && 'blur blur-hint'
					}`}
				>
					Hint: {hint}
				</p>
				<p
					className={`answer ${
						!isAnswerShown ? 'blur blur-answer' : ''
					}`}
				>
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

				<div className="nav-btn-grp">
					<button
						onClick={() => setCurrQuestionI((prev) => prev - 1)}
						disabled={currQuestionI === 0}
					>
						Before
					</button>

					{isLastQuestion && (
						<p className="btn-outline finished">{saveBtnText}</p>
					)}

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
