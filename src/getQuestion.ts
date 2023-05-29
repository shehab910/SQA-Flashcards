type QuestionType = "term" | "mcq" | "shortAnswer" | "longAnswer";

type Question = {
	question: string;
	answer: string;
	slideNo: number;
	choices?: string[];
	hint?: string;
	type?: QuestionType;
	lectureNo?: number;
	slideUrl?: string;
};

type SampleExam = {
	title: string;
	slideUrl: string;
};

type LectureQuestion = {
	lectureNo: number;
	slideUrl: string;
	terms?: Question[];
	// multipleChoice?: Question[];
	// shortAnswer?: Question[];
	// longAnswer?: Question[];
};

type Data = {
	lectureQuestions: LectureQuestion[];
	sampleExams: SampleExam[];
};

const DATA: Data = {
	lectureQuestions: [
		{
			lectureNo: 1,
			slideUrl:
				"https://docs.google.com/presentation/d/127OLnjdrNN4MvlO2oMxfEBwPqdKFRlT4/edit",
			terms: [
				{
					question:
						"Problems identified when team members do not follow applicable standards, recorded processes, or procedures ",
					answer: "Noncompliance issues",
					hint: "",
					slideNo: 37,
				},
				{
					question:
						"Quality assurance process to develop processes to reduce defects by avoiding or correcting ",
					answer: "Poka-Yoke",
					hint: "avoiding or correcting",
					slideNo: 33,
				},
				{
					question:
						"Proven set of global best practices that drives business performance through benchmark key capabilities ",
					answer: "Capability Maturity Model Integration (CMMI)®",
					hint: "",
					slideNo: 23,
				},
				{
					question:
						"Ongoing process that ensures software product meets and complies with organization's established and standardized quality specifications",
					answer: "Software quality assurance (SQA)",
					hint: "",
					slideNo: 8,
				},
				{
					question:
						"Tangible resources used by an organization to guide the management of its projects and operations",
					answer: "Organizational process assets",
					hint: "",
					slideNo: 43,
				},
				{
					question:
						"A process-level improvement training and appraisal program",
					answer: "Capability Maturity Model Integration (CMMI)®",
					hint: "",
					slideNo: 21,
				},
				{
					question:
						"Proven set of global best practices that drives business performance through building and benchmarking key capabilities",
					answer: "Capability Maturity Model Integration (CMMI)®",
					hint: "",
					slideNo: 23,
				},
			],
		},
		{
			lectureNo: 2,
			slideUrl:
				"https://docs.google.com/presentation/d/118FFPqwMaZK7NgKj9CJZeegIc9ZI7mW_/edit",
			terms: [
				{
					question:
						"Cost incurred when a product fails to conform to quality specification before shipment to a customer.",
					answer: "Internal Failure Cost",
					hint: "",
					slideNo: 60,
				},
				{
					question:
						"Principle that states that 80% of effects come from 20% of causes.",
					answer: "Pareto Principle",
					hint: "",
					slideNo: 27,
				},
				{
					question:
						"Management meeting at planned intervals to ensure the company quality management system's continuous suitability, adequacy and alignment with the strategic direction of the organization.",
					answer: "Management Reviews",
					hint: "",
					slideNo: 42,
				},
				{
					question:
						"Method for calculating the costs companies incur ensuring that products meet quality standards, as well as the costs of producing goods that fail to meet quality standards.",
					answer: "Cost of Quality (CoQ)",
					hint: "",
					slideNo: 59,
				},
				{
					question:
						"Organization conduct examination at planned intervals to check if quality management system conforms to requirements of International Standard and effectively implemented & maintained.",
					answer: "Internal Audit",
					hint: "",
					slideNo: 39,
				},
				{
					question:
						"Percentage of an organizations total capacity or effort that is being used to overcome the cost of poor quality.",
					answer: "Hidden Quality Costs/Hidden Factory",
					hint: "",
					slideNo: 64,
				},
				{
					question:
						"Matrix that shows how each person contributes to a project.",
					answer: "RACI model/matrix",
					hint: "",
					slideNo: 54,
				},
				{
					question:
						"A mechanism of analysing the defects to identify their sources.",
					answer: "RCA (Root Cause Analysis)",
					hint: "Is a CMMI mechanism",
					slideNo: 8,
				},
			],
		},
		// {
		// 	lectureNo: 3,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/15_LXGam1jmhfzyHqnYAvTT-olIeaxZnP/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 4,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/18GVt0ldYyhr20nN1FOzFpCuHGab1TO7w/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 5,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/18TA9utmpSLXEtMq4i11-6KezsTBINWIR/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 6,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/19nsq4CcKYRlHyZDgYvTyGuxPJ3SNzmm5/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 7,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/1_tDpiD1F0PN6xbkondPYp52bodGwiPzN/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 8,
		// 	slideUrl:
		// 		"https://docs.google.com/presentation/d/1fFC90rVeEfvnbGUG-oY9WuS_CW8X1g9P/edit",
		// 	terms: [{}],
		// },
		// {
		// 	lectureNo: 9,
		// 	slideUrl: "",
		// 	terms: [{}],
		// },
	],
	sampleExams: [
		{
			title: "Agile Tester CTFL-AT",
			slideUrl:
				"https://docs.google.com/presentation/d/1IbMj3P9joC6_Nrj58wJqDoTILoeNmbAb/edit",
		},
		{
			title: "Tester Foundation Level CTFL",
			slideUrl:
				"https://docs.google.com/presentation/d/1pWYhWL9wVdvkgjkrs91QcE9qagg6uU7e/edit",
		},
	],
};

export const questionHeadding = (questType: QuestionType) => {
	switch (questType) {
		case "term":
			return "Replace with Key Term(s)";
		// case "mcq":
		// 	return ;
		// case "shortAnswer":
		// 	return ;
		// case "longAnswer":
		// 	return ;
		default:
			return "";
	}
};

export const getAllTerms = () => {
	const res: Question[] = [];
	for (const lecture of DATA.lectureQuestions) {
		if (lecture?.terms) {
			for (const term of lecture.terms) {
				if (!term || !term.question || !term.answer) continue;
				term.lectureNo = lecture.lectureNo;
				term.slideUrl = lecture.slideUrl;
				term.type = "term";
				res.push(term);
			}
		}
	}
	return res;
};
