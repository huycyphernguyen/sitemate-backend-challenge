import { Issue } from './models/issue.model';

export const issuesProviders = [
	{ provide: 'IssuesRepository', useValue: Issue },
];
