import { Question } from './data';

const repoUrl = 'https://github.com/shehab910/SQA-Flashcards';

const constructIssueUrl = (
	repoUrl: string,
	label: string,
	title: string,
	body: string
) =>
	`${repoUrl}/issues/new?labels=${encodeURIComponent(
		label
	)}&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;

export const makeSlideNoIssueUrl = (questionObj: Question) => {
	const { id: questionID, question, questionHeader } = questionObj;
	const title = `Slide number for question ${questionID}`;
	const label = 'slide number missing';
	const body = `Please add the slide number for question with id: **${questionID}**

# Question ${questionID}:
### ${questionHeader}
${question}
# Answer found in slide number:
	slideNo: <PUT SLIDE NUMBER HERE>
`;
	return constructIssueUrl(repoUrl, label, title, body);
};

export const makeHintIssueUrl = (questionObj: Question) => {
	const { id: questionID, question, questionHeader } = questionObj;
	const title = `Hint for question ${questionID}`;
	const label = 'hint missing';
	const body = `Please add a hint for question with id: **${questionID}**

# Question ${questionID}:
### ${questionHeader}
${question}
# Hint:
	hint: <PUT HINT HERE>
`;
	return constructIssueUrl(repoUrl, label, title, body);
};
