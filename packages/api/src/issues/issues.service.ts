import { Inject, Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { Issue } from './models/issue.model';

@Injectable()
export class IssuesService {
	constructor(
		@Inject('IssuesRepository')
		private readonly issuesRepository: typeof Issue,
	) {}

	async create(createIssueDto: CreateIssueDto): Promise<Issue> {
		return this.issuesRepository.create(createIssueDto);
	}

	async update(id: string, createIssueDto: CreateIssueDto): Promise<Issue> {
		const issue = await this.issuesRepository.findByPk(id);
		issue.title = createIssueDto.title;
		issue.description = createIssueDto.description;
		await issue.save();
		return issue;
	}

	async findAll(): Promise<Issue[]> {
		return this.issuesRepository.findAll<Issue>();
	}
}
