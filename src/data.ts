export interface Question {
	id: number;
	lectureNo: number;
	questionHeader: string;
	question: string;
	choices?: string[];
	answer: string;
	hint: string;
	slideNo: number;
	solved: boolean;
}
//! get the slide number for all ("sildeNo: 0 or -1")
//! search for all fixme
export const defaultLectureQuestions: Question[] = [
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Problems identified when team members do not follow applicable standards, recorded processes, or procedures ',
		answer: 'Noncompliance issues',
		hint: '',
		slideNo: 37,
		solved: false,
		id: 0,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Quality assurance process to develop processes to reduce defects by avoiding or correcting ',
		answer: 'Poka-Yoke',
		hint: 'avoiding or correcting',
		slideNo: 33,
		solved: false,
		id: 1,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Proven set of global best practices that drives business performance through benchmark key capabilities ',
		answer: 'Capability Maturity Model Integration (CMMI)®',
		hint: '',
		slideNo: 23,
		solved: false,
		id: 2,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			"Ongoing process that ensures software product meets and complies with organization's established and standardized quality specifications",
		answer: 'Software quality assurance (SQA)',
		hint: '',
		slideNo: 8,
		solved: false,
		id: 3,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Tangible resources used by an organization to guide the management of its projects and operations',
		answer: 'Organizational process assets',
		hint: '',
		slideNo: 43,
		solved: false,
		id: 4,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question: 'A process-level improvement training and appraisal program',
		answer: 'Capability Maturity Model Integration (CMMI)®',
		hint: '',
		slideNo: 21,
		solved: false,
		id: 5,
	},
	{
		lectureNo: 1,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Proven set of global best practices that drives business performance through building and benchmarking key capabilities',
		answer: 'Capability Maturity Model Integration (CMMI)®',
		hint: '',
		slideNo: 21,
		solved: false,
		id: 6,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question:
			'Compare QA and QC in respect of focus and assessment measures/tools.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 15,
		solved: false,
		id: 7,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question:
			'Objectivity in process quality assurance evaluations is critical to success of project. List four objective evaluation methods.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 32,
		solved: false,
		id: 8,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question: 'Mention four benefits of software quality assurance.',
		answer: '(Open the slide(s) from below and one after it)',
		hint: '',
		slideNo: 12,
		solved: false,
		id: 9,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question: 'Explain what is meant by PDCA/Deming cycle.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 11,
		solved: false,
		id: 10,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question:
			'An agile project using Scrum has many opportunities to objectively evaluate ceremonies and work products. Describe three opportunities.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 39,
		solved: false,
		id: 11,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question:
			'Process tailoring is a critical activity that allows controlled changes to the processes due to the specific needs of a project or a part of the organization. Mention three reasons for process tailoring. ',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 51,
		solved: false,
		id: 12,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question: 'List four examples of organizational process assets.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 43,
		solved: false,
		id: 13,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question: 'Identify three similarities between QA and QC.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 16,
		solved: false,
		id: 14,
	},
	{
		lectureNo: 1,
		questionHeader: 'Exercise',
		question: 'Mention three quality assurance work products.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 36,
		solved: false,
		id: 15,
	},
	//? LECTURE 2
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Cost incurred when a product fails to conform to quality specification before shipment to a customer.',
		answer: 'INTERNAL FAILURE COST',
		hint: '',
		slideNo: 60,
		solved: false,
		id: 16,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Principle that states that 80% of effects come from 20% of causes.',
		answer: 'PARETO PRINCIPLE',
		hint: '',
		slideNo: 27,
		solved: false,
		id: 17,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Management meeting at planned intervals to ensure the company quality management system’s continuous suitability, adequacy and alignment with the strategic direction of the organization.',
		answer: 'MANAGEMENT REVIEWS',
		hint: '',
		slideNo: 42,
		solved: false,
		id: 18,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Method for calculating the costs companies incur ensuring that products meet quality standards, as well as the costs of producing goods that fail to meet quality standards.',
		answer: 'COQ ',
		hint: '',
		slideNo: 59,
		solved: false,
		id: 19,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Organization conduct examination at planned intervals to check if quality management system conforms to requirements of International Standard and effectively implemented & maintained.',
		answer: 'INTERNAL AUDITS ',
		hint: '',
		slideNo: 39,
		solved: false,
		id: 20,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'Percentage of an organizations total capacity or effort that is being used to overcome the cost of poor quality.',
		answer: 'Hidden Quality Costs (HIDDEN FACTORY)',
		hint: '',
		slideNo: 64,
		solved: false,
		id: 21,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question: 'Matrix that shows how each person contributes to a project.',
		answer: 'RACI',
		hint: '',
		slideNo: 54,
		solved: false,
		id: 22,
	},
	{
		lectureNo: 2,
		questionHeader: 'Replace with Key Term(s)',
		question:
			'A mechanism of analysing the defects to identify their sources.',
		answer: 'RCA',
		hint: '',
		slideNo: 8,
		solved: false,
		id: 23,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Visual representations of a relationship between two sets of data to test correlation between variables.',
		answer: 'SCATTER PLOT',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 24,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Includes a severity occurrence and detection rating to calculate risk and determine the next steps.',
		answer: 'FMEA',
		hint: '',
		slideNo: 29,
		solved: false,
		id: 25,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Looking at any problem and drilling down by asking questions and avoid answers that are too simple or overlook important details.',
		answer: '5 WHYS',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 26,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Every contributing cause and its potential effects can be shown under categories and sub-categories.',
		answer: 'FISHBONE ',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 27,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Bar graph that groups the frequency distribution to show the relative significance of causes of failure.',
		answer: 'PARETO CHART ',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 28,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify root cause analysis tool',
		question:
			'Group activity to collect different viewpoints encouraging a deeper level of critical thinking.',
		answer: 'BRAINSTORMING',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 29,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify type of root cause',
		question: 'Picking the wrong person for a task.',
		answer: 'Organizational',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 30,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify type of root cause',
		question: 'The server is not booting up.',
		answer: 'Physical',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 31,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify type of root cause',
		question: 'Instructions not accurately followed.',
		answer: 'Human',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 32,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify PDCA Phase',
		question: 'Incorporate your plan on a small scale .',
		answer: 'Do',
		hint: '',
		slideNo: 51,
		solved: false,
		id: 33,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify PDCA Phase',
		question: 'Identify resource needs.',
		answer: 'Plan',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 34,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify PDCA Phase',
		question: 'PDCA model becomes the new standard baseline. ',
		answer: 'Act',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 35,
	},
	{
		lectureNo: 2,
		questionHeader: 'Identify PDCA Phase',
		question: "Audit your plan's execution.",
		answer: 'Check',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 36,
	},
	{
		lectureNo: 2,
		questionHeader: 'MCQ',
		question:
			'The outputs of the management reviews shall include decisions and actions related to all following, except',
		choices: [
			'a. opportunities for improvement',
			'b. need for changes to quality management system',
			'c. audit results ',
			'd. resource needs',
		],
		answer: 'c. audit results',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 37,
	},
	{
		lectureNo: 2,
		questionHeader: 'MCQ',
		question: 'Which of the following is not included in action plan?',
		choices: [
			'a. affected stakeholders',
			'c. expected cost',
			'b. schedule',
			'd. results achieved',
		],
		answer: 'd. results achieved',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 38,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'Periodic review of documentation',
		answer: 'Appraisal cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 39,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'Client complaints ',
		answer: 'External failure cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 40,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'Design verification',
		answer: 'Prevention cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 41,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'Defective products, before shipment to client',
		answer: 'Internal failure cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 42,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'New employee training',
		answer: 'Prevention cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 43,
	},
	{
		lectureNo: 2,
		questionHeader: 'Specify Cost Type',
		question: 'Internal auditing ',
		answer: 'Appraisal cost',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 44,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question:
			'The aim of 5 whys root cause analysis is to find the main technical causes  behind the problem. Comment.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 17,
		solved: false,
		id: 45,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question:
			'When to perform causal analysis? Which factors affect decision of effort and formality required?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 7,
		solved: false,
		id: 46,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question: 'Identify elements of process improvement proposal.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 34,
		solved: false,
		id: 47,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question: 'Discuss advantages of PCDA approach.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 49,
		solved: false,
		id: 48,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question:
			'Defining the problem is an important step in root cause analysis. Explain the rule that should be followed in defining the problem.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 14,
		solved: false,
		id: 49,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question: 'Describe four types of costs of quality.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 60,
		solved: false,
		id: 50,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question: 'Identify steps of internal audit process.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 40,
		solved: false,
		id: 51,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question: 'Explain roles in RACI model.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 54,
		solved: false,
		id: 52,
	},
	{
		lectureNo: 2,
		questionHeader: 'Exercise',
		question:
			'List three benefits and limitations of cost of quality system. ',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 63,
		solved: false,
		id: 53,
	},
	//? Lecture 3
	{
		question: 'Static review objectives include ---, ---, and ---.',
		answer: 'finding defects, gaining understanding and educating participants',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 54,
	},
	{
		question:
			'It is very useful that test basis has measurable coverage criteria  to be used as ---. ',
		answer: 'KEY PERFORMANCE INDICATOR (KPI)',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 55,
	},
	{
		question:
			'An element of human psychology called --- makes it difficult to accept information that disagrees with currently held beliefs.',
		answer: 'CONFIRMATION BIAS ',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 56,
	},
	{
		question: 'Static testing types include ---, ---, ---, and ---.',
		answer: 'Peer Review, Walkthrough, Technical review, Inspection',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 57,
	},
	{
		question:
			'Acceptance testing of system by administration staff is usually performed in a ---.',
		answer: 'PRODUCTION ENVIRONMENT',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 58,
	},
	{
		question:
			'Finding defects is not the main focus of --- testing, its goal is to build confidence in the software.',
		answer: 'USER ACCEPTANCE',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 59,
	},
	{
		question:
			'Maintenance testing involve planned releases and unplanned releases called ---. ',
		answer: '(HOT FIXES)',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 60,
	},
	{
		question: 'Triggers for software maintenance include ---, --- and ---.',
		answer: 'modification, migration and retirement',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 61,
	},
	{
		question:
			'--- testing is used by developers of commercial off-the-shelf (COTS) software who want to get feedback from potential/existing users, customers before the software product is put on the market.',
		answer: 'ALPHA AND BETA',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Complete',
		id: 62,
	},
	{
		question:
			'Evaluating the review findings against the exit criteria to make a review decision',
		answer: 'Review meeting/issue communication and analysis',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Formal Review/Inspection Activity',
		id: 63,
	},
	{
		question:
			'Explaining the scope, objectives, process, roles, and work products to the participants ',
		answer: 'Initiate review',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Formal Review/Inspection Activity',
		id: 64,
	},
	{
		question: 'Noting potential defects, recommendations, and questions ',
		answer: 'Individual preparation',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Formal Review/Inspection Activity',
		id: 65,
	},
	{
		question: 'Defining the entry and exit criteria',
		answer: 'Planning',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Formal Review/Inspection Activity',
		id: 66,
	},
	{
		question:
			'Document all the issues, problems, and open points that were identified during the meeting. With the advent of tools to support the review process, especially logging of defects/open points/decisions there is often no need for a scribe.',
		answer: 'scribe',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Whose Responsibility in Review?',
		id: 67,
	},
	{
		question:
			'Decide on the execution of reviews, allocates time in project schedules and determines if the review objectives have been met.',
		answer: 'manager',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Whose Responsibility in Review?',
		id: 68,
	},
	{
		question:
			'Lead, plan and run the review. May mediate between the various points of view and is often the person upon whom the success of the review rests.',
		answer: 'moderator/facilitator',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Whose Responsibility in Review?',
		id: 69,
	},
	{
		question:
			'Reviewers are provided with structured guidelines on how to read through the work product based on its expected usage. ',
		answer: 'Scenario-based/dry run.',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Review Technique',
		id: 70,
	},
	{
		question:
			'Reviewers detect issues based on set of questions based on potential defects, which may be derived from experience. ',
		answer: 'Checklist-based.',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Review Technique',
		id: 71,
	},
	{
		question:
			'Reviewers are provided with little or no guidance on how this task should be performed. It needs little preparation and is highly dependent on reviewer skills.',
		answer: 'Ad hoc.',
		hint: '',
		slideNo: 26,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Review Technique',
		id: 72,
	},
	{
		question:
			'Reviewers take on different stakeholder viewpoints in individual reviewing.',
		answer: 'Perspective-based reading.',
		hint: '',
		slideNo: -1,
		solved: false,
		lectureNo: 3,
		questionHeader: 'Specify Review Technique',
		id: 73,
	},
	{
		question: 'Incorrect sequencing or timing of interface calls',
		answer: 'Integration testing',
		hint: '',
		slideNo: 44,
		solved: false,
		lectureNo: 3,
		questionHeader: 'In Which Testing Level Can Defect be Found?',
		id: 74,
	},
	{
		question: 'Incorrect in code logic',
		answer: 'Component testing',
		hint: '',
		slideNo: 42,
		solved: false,
		lectureNo: 3,
		questionHeader: 'In Which Testing Level Can Defect be Found?',
		id: 75,
	},
	{
		question:
			'Failure of the system to work properly in the production environment(s)',
		answer: 'System testing',
		hint: '',
		slideNo: 47,
		solved: false,
		lectureNo: 3,
		questionHeader: 'In Which Testing Level Can Defect be Found?',
		id: 76,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question: 'Explain the testing principles in details.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 7,
		solved: false,
		id: 77,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question:
			'Identify three guidelines to successful conduct of review process.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 22,
		solved: false,
		id: 78,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question: 'Clarify the tester role during each of SDLC phases.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 13,
		solved: false,
		id: 79,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question:
			'What should a tester do in case a component is not finished and he needs to conduct component integration testing?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 45,
		solved: false,
		id: 80,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question: 'Compare between regression and confirmation testing types.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 61,
		solved: false,
		id: 81,
	},
	{
		lectureNo: 3,
		questionHeader: 'Exercise',
		question: 'Illustrate steps of dynamic testing using a diagram.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 40,
		solved: false,
		id: 82,
	},
	//? Lecture 4
	{
		lectureNo: 4,
		questionHeader: 'Identify testing estimation technique',
		question:
			'Breaking down the test project into modules; sub-modules; functionalities; tasks and estimate effort/duration for each task .',
		answer: 'WORK BREAKDOWN STRUCTURE (WBS)',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 83,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify testing estimation technique',
		question:
			'Assumes that you already tested similar applications in previous projects and collected metrics from those projects.',
		answer: 'EXPERIANCED-BASED TESTING',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 84,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify testing estimation technique',
		question:
			'Three types of estimations most likely/optimistic/pessimistic are calculated for each activity.',
		answer: '(PERT) ',
		hint: '',
		slideNo: 12,
		solved: false,
		id: 85,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify testing estimation technique',
		question:
			'Work breakdown structure is distributed to a team comprising of 3-7 members for re-estimating the tasks and final estimate is the result of the summarized estimates based on the team agreement.',
		answer: 'WIDE-BAND DELPHI',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 86,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify Test Strategy Type',
		question:
			'Tests rely on making systematic use of predefined set of tests/test conditions, such as taxonomy of common types of failures, list of important quality characteristics, or company-wide look-and-feel standards.',
		answer: 'METHODICAL',
		hint: '',
		slideNo: 40,
		solved: false,
		id: 87,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify Test Strategy Type',
		question:
			'Tests are designed and implemented, and may immediately be executed in response to knowledge gained from prior test results rather than being pre-planned.',
		answer: 'REACTIVE',
		hint: '',
		slideNo: 41,
		solved: false,
		id: 88,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify Test Strategy Type',
		question:
			'Tests are designed based on some required aspect of the product, such as function, business process, internal structure, non-functional characteristic.',
		answer: 'MODEL BASED',
		hint: '',
		slideNo: -1,
		solved: false,
		id: 89,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify Test Strategy Type',
		question:
			'Tests include reuse of existing test ware (especially test cases and test data) and test suites.',
		answer: 'REGRESSION-AVERSE',
		hint: '',
		slideNo: 41,
		solved: false,
		id: 90,
	},
	{
		lectureNo: 4,
		questionHeader: 'Identify Test Strategy Type',
		question:
			'Tests driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself.',
		answer: 'DIRECTED (consultative)',
		hint: '',
		slideNo: 41,
		solved: false,
		id: 91,
	},
	{
		lectureNo: 4,
		questionHeader: 'Exercise',
		question:
			'Identify testing life cycle phases and deliverable from each phase.',
		answer: '(Open the 6 slide(s) from below)',
		hint: '',
		slideNo: 4,
		solved: false,
		id: 92,
	},
	{
		lectureNo: 4,
		questionHeader: 'Exercise',
		question: 'Mention three entry and three exit criteria.',
		answer: '(Open the 2 slide(s) from below)',
		hint: '',
		slideNo: 22,
		solved: false,
		id: 93,
	},
	{
		lectureNo: 4,
		questionHeader: 'Exercise',
		question:
			'Give an example on a test work product for each of the following test activities: test planning, monitoring, analysis, design, implementation, execution and completion.',
		answer: '(Open the 3 slide(s) from below)',
		hint: '',
		slideNo: 31,
		solved: false,
		id: 94,
	},
	{
		lectureNo: 4,
		questionHeader: 'Exercise',
		question:
			'Explain three differences between test strategy and test plan.',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 37,
		solved: false,
		id: 95,
	},
	{
		lectureNo: 4,
		questionHeader: 'Exercise',
		question: 'What is meant by test procedure?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 59,
		solved: false,
		id: 96,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question:
			'Submit button is not working on a login page and customers are unable to login to the application.',
		answer: 'High Priority & High Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 97,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question:
			'Crash in some functionality which is going to deliver after couple of releases.',
		answer: 'Low Priority & High Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 98,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question: 'Spelling mistake of a company name on homepage.',
		answer: 'High Priority & Low Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 99,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question: 'FAQ page takes a long time to load.',
		answer: 'Low Priority & Low Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 100,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question: 'Company logo or tagline issues.',
		answer: 'High Priority & Low Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 101,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question:
			'On a bank website, an error message pops up when a customer clicks on transfer money button.',
		answer: 'High Priority & High Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 102,
	},
	{
		lectureNo: 4,
		questionHeader:
			'Specify scenario severity (high/low) and priority (high/low)',
		question:
			'Font family or font size or colour or spelling issue in the application or reports.',
		answer: 'Low Priority & Low Severity',
		hint: '',
		slideNo: 69,
		solved: false,
		id: 103,
	},
	//? LECTURE 5
	{
		id: 104,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Black-box testing technique used very useful for designing acceptance tests with customer/user participation',
		answer: 'Use Case Testing Technique',
		hint: '',
		slideNo: 13,
		solved: false,
	},
	{
		id: 105,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question: 'The time gap between date of detection & date of closure',
		answer: 'Defect Age',
		hint: '',
		slideNo: 40,
		solved: false,
	},
	{
		id: 106,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Black-box testing technique useful for testing the implementation of system requirements that specify how different combinations of conditions result in different outcomes',
		answer: 'Decision Table Technique',
		hint: '',
		slideNo: 8,
		solved: false,
	},
	{
		id: 107,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Testing technique where informal (not pre-defined) tests are designed, executed, logged, and evaluated dynamically during test execution. The test results are used to create tests for the areas that may need more testing',
		answer: 'Exploratory Testing Technique',
		hint: '',
		slideNo: 20,
		solved: false,
	},
	{
		id: 108,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Type of testing is used to focus effort required during testing. It is used to decide where/when to start testing and identify areas that need more attention',
		answer: 'Risk-based Testing',
		hint: '',
		slideNo: 31,
		solved: false,
	},
	{
		id: 109,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Tool used to establish and maintain integrity of work products (components, data and documentation) of the system through the whole life cycle',
		answer: 'Configuration Management',
		hint: '',
		slideNo: 28,
		solved: false,
	},
	{
		id: 110,
		lectureNo: 5,
		questionHeader: 'Replace with key Term(s)',
		question:
			'Black-box testing technique used only when data is numeric or sequential',
		answer: 'BVA',
		hint: '',
		slideNo: 7,
		solved: false,
	},
	{
		id: 111,
		lectureNo: 5,
		questionHeader: 'Identify Type of Project Risk',
		question: 'Test environment not ready on time',
		answer: 'Technical Issue',
		hint: '',
		slideNo: 33,
		solved: false,
	},
	{
		id: 112,
		lectureNo: 5,
		questionHeader: 'Identify Type of Project Risk',
		question: 'Skill, training and staff shortages',
		answer: 'Organizational Issue',
		hint: '',
		slideNo: 33,
		solved: false,
	},
	{
		id: 113,
		lectureNo: 5,
		questionHeader: 'Identify Type of Project Risk',
		question: 'Contractual issues',
		answer: 'Supplier Issue',
		hint: '',
		slideNo: 33,
		solved: false,
	},
	{
		id: 114,
		lectureNo: 5,
		questionHeader: 'Identify Type of Project Risk',
		question:
			'Improper attitude such as not appreciating the value of finding defects during testing',
		answer: 'Organizational Issue',
		hint: '',
		slideNo: 33,
		solved: false,
	},
	{
		id: 115,
		lectureNo: 5,
		questionHeader: 'Identify Type of Project Risk',
		question: 'Low quality of the design, code, or configuration data',
		answer: 'Technical Issue',
		hint: '',
		slideNo: 33,
		solved: false,
	},
	{
		id: 116,
		lectureNo: 5,
		questionHeader: 'Identify Approach used in Testing Tool',
		question:
			'Generic script processes action words describing the actions to be taken, which then calls scripts to process the associated test data',
		answer: 'Keyword Driven',
		hint: '',
		slideNo: 50,
		solved: false,
	},
	{
		id: 117,
		lectureNo: 5,
		questionHeader: 'Identify Approach used in Testing Tool',
		question:
			'Separate out the test inputs and expected results, usually into a spreadsheet, and uses a more generic test script that can read the input data and execute the same test script with different data',
		answer: 'Data Driven',
		hint: '',
		slideNo: 50,
		solved: false,
	},
	{
		id: 118,
		lectureNo: 5,
		questionHeader: 'Identify Approach used in Testing Tool',
		question:
			'Enable a functional specification to be captured in the form of a model, such as an activity diagram. This task is generally performed by a system designer',
		answer: 'Model Based',
		hint: '',
		slideNo: 50,
		solved: false,
	},
	{
		id: 119,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question: 'How to measure the decision testing coverage?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 16,
		solved: false,
	},
	{
		id: 120,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question: 'When exploratory testing is most appropriate?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 20,
		solved: false,
	},
	{
		id: 121,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question:
			'What is the common minimum coverage standard for decision table testing?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 8,
		solved: false,
	},
	{
		id: 122,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question:
			'Contrast benefits and drawbacks of hiring independent testers',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 24,
		solved: false,
	},
	{
		id: 123,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question:
			'Resulting product risk information is used to guide test activities. Elaborate',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 31,
		solved: false,
	},
	{
		id: 124,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question: 'Illustrate the bug life cycle using a diagram',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 40,
		solved: false,
	},
	{
		id: 125,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question:
			'Identify three potential risks of using tools to support testing',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 48,
		solved: false,
	},
	{
		id: 126,
		lectureNo: 5,
		questionHeader: 'Exersise',
		question:
			'After completing the tool selection and a successful proof-of-concept evaluation, introducing selected tool into an organization generally starts with pilot project. Why?',
		answer: '(Open the slide(s) from below)',
		hint: '',
		slideNo: 56,
		solved: false,
	},
	{
		id: 127,
		lectureNo: 6,
		questionHeader: 'Complete',
		question: 'The ...... is responsible for quality in Agile projects.',
		answer: 'WHOLE TEAM',
		hint: '',
		slideNo: -1,
		solved: false,
	},
	{
		id: 128,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'XP teams use ...... time to pay down ...... by refactoring code or do research.',
		answer: 'SLACK TIME - TECHNICAL DEPT',
		hint: '',
		slideNo: 28,
		solved: false,
	},
	{
		id: 129,
		lectureNo: 6,
		questionHeader: 'Complete',
		question: 'A cross-functional team in XP releases ...... frequently.',
		answer: 'MINIMAL VIABLE PRODCT',
		hint: '',
		slideNo: 22,
		solved: false,
	},
	{
		id: 130,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'Agile projects have short iterations; thus, project team receives ...... feedback on product quality throughout SDLC.',
		answer: 'EARLY and CONTINIOUS',
		hint: '',
		slideNo: 11,
		solved: false,
	},
	{
		id: 131,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'The general objective of ...... is to visualize and optimize the flow of work within a value-added chain.',
		answer: 'KANBAN',
		hint: '',
		slideNo: 31,
		solved: false,
	},
	{
		id: 132,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'One programmer plays ...... role and focuses on clean code, and compiles and runs. Second one plays role of ...... and focuses on the big picture and reviews code for improvement or refactoring.',
		answer: 'PILOT - NAVIGATOR',
		hint: '',
		slideNo: 24,
		solved: false,
	},
	{
		id: 133,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'There are 2 levels of plans in XP: ...... .In both levels, there are 3 steps: ......',
		answer: 'RELEASE PLAN and ITERATION PLAN - EXPLORATION, COMMITMENT, and STEERING',
		hint: '',
		slideNo: 20,
		solved: false,
	},
	{
		id: 134,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'User stories must address ...... characteristics. Each story includes ...... for these characteristics used to decide when a task is ......',
		answer: 'FUNCTIONAL and NON-FUNCTIONAL - ACCEPTANCE CRITERIA - FINISHED',
		hint: '',
		slideNo: 37,
		solved: false,
	},
	{
		id: 135,
		lectureNo: 6,
		questionHeader: 'Complete',
		question:
			'All team members, testers and non-testers, can ...... on both testing and non-testing activities.',
		answer: 'PROVIDE INPUT',
		hint: '',
		slideNo: 42,
		solved: false,
	},
	{
		id: 136,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'When the regression testing is automated, the Agile testers are freed to concentrate their manual testing on ...... testing of defect fixes.',
		answer: 'IMPLEMENTED CHANGES, and CONFIRMATION',
		hint: '',
		slideNo: 8,
		solved: false,
	},
	{
		id: 137,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'...... iterations occur periodically to resolve any remaining defects and other forms of ......',
		answer: 'STABILIZATION - TECHNICAL DEPT',
		hint: '',
		slideNo: 19,
		solved: false,
	},
	{
		id: 138,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'Because of the heavy use of test automation, a higher percentage of the manual testing on Agile projects tends to be done using ...... testing.',
		answer: 'EXPERIENCE-BASED',
		hint: '',
		slideNo: 20,
		solved: false,
	},
	{
		id: 139,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'While developers will focus on creating unit tests, testers should focus on creating automated .... and .... tests.',
		answer: 'INTEGRATION - SYSTEM',
		hint: '',
		slideNo: 20,
		solved: false,
	},
	{
		id: 140,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'Changes to existing features have testing implications, especially ...... testing implications.',
		answer: 'REGRESSION',
		hint: '',
		slideNo: 21,
		solved: false,
	},
	{
		id: 141,
		lectureNo: 7,
		questionHeader: 'Complete',
		question:
			'During an iteration, any given user story will typically progress sequentially through the following test activities: .... and ....',
		answer: 'UNIT TESTING - FEATURE ACCEPTANCE TESTING',
		hint: '',
		slideNo: 21,
		solved: false,
	},
];

// Stopped at the end of slide 50, lecture 8

// lecture x, slide y
export const MISSING_QUESTIONS_SLIDES = [];
