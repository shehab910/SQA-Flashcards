import { defaultLectureQuestions } from './data';

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
			return 'https://docs.google.com/presentation/d/18GVt0ldYyhr20nN1FOzFpCuHGab1TO7w/edit';
		case 5:
			return 'https://docs.google.com/presentation/d/18TA9utmpSLXEtMq4i11-6KezsTBINWIR/edit';
		case 6:
			return 'https://docs.google.com/presentation/d/19nsq4CcKYRlHyZDgYvTyGuxPJ3SNzmm5/edit';
		case 7:
			return 'https://docs.google.com/presentation/d/1_tDpiD1F0PN6xbkondPYp52bodGwiPzN/edit';
		case 8:
			return 'https://docs.google.com/presentation/d/1fFC90rVeEfvnbGUG-oY9WuS_CW8X1g9P/edit';
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

// const getLocalQuestions = () => {
// 	// get from local storage
// 	const localQuestions = localStorage.getItem('lectureQuestions');
// 	if (localQuestions) {
// 		return JSON.parse(localQuestions) as Question[];
// 	}
// };

// export const deleteLocalQuestions = () => {
// 	localStorage.removeItem('lectureQuestions');
// };

// export const saveQuestions = (questions: Question[]) => {
// 	localStorage.setItem('lectureQuestions', JSON.stringify(questions));
// };

export const getAllQuestions = () => {
	const localQuestions = [...defaultLectureQuestions];
	return localQuestions
		.filter((q) => q.solved === false)
		.sort(() => Math.random() - 0.5)
		.filter(
			(q) =>
				q.questionHeader !== 'Exercise' &&
				q.questionHeader !== 'General Question' &&
				q.questionHeader !== 'Exersise'
		);
};
