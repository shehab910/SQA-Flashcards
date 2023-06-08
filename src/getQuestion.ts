import { Question, defaultLectureQuestions } from './data';

type QuestionType = 'shortAnswer' | 'longAnswer';

export const getSlideUrl = (slideNumber: number) => {
	switch (slideNumber) {
		case 1:
			return 'https://docs.google.com/presentation/d/127OLnjdrNN4MvlO2oMxfEBwPqdKFRlT4/edit';
		case 2:
			return 'https://docs.google.com/presentation/d/118FFPqwMaZK7NgKj9CJZeegIc9ZI7mW_/edit';
		case 3:
			return 'https://docs.google.com/presentation/d/15_LXGam1jmhfzyHqnYAvTT-olIeaxZnP/edit';
		case 4:
			return 'https://docs.google.com/presentation/d/15_LXGam1jmhfzyHqnYAvTT-olIeaxZnP/edit';
		case 5:
			return 'https://docs.google.com/presentation/d/18TA9utmpSLXEtMq4i11-6KezsTBINWIR/edit';
		default:
			return '';
	}
};

export const questionHeadding = (questType: QuestionType) => {
	switch (questType) {
		// case 'term':
		// 	return 'Replace with Key Term(s)';
		// case "mcq":
		// 	return ;
		// case "shortAnswer":
		// 	return ;
		// case "longAnswer":
		// 	return ;
		default:
			return '';
	}
};

const getLocalQuestions = () => {
	// get from local storage
	const localQuestions = localStorage.getItem('lectureQuestions');
	if (localQuestions) {
		return JSON.parse(localQuestions) as Question[];
	}
};

export const saveQuestions = (questions: Question[]) => {
	localStorage.setItem('lectureQuestions', JSON.stringify(questions));
};

export const getAllQuestions = () => {
	const localQuestions = getLocalQuestions() || [...defaultLectureQuestions];
	return localQuestions
		.filter((q) => q.solved === false)
		.sort(() => Math.random() - 0.5);
};
