import { Inject, Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { Issue } from './models/issue.model';
import { UpdateIssueDto } from './dto/update-iusse.dto';

@Injectable()
export class IssuesService {
	constructor(
		@Inject('IssuesRepository')
		private readonly issuesRepository: typeof Issue,
	) {}

	async create(createIssueDto: CreateIssueDto): Promise<Issue> {
		return this.issuesRepository.create(createIssueDto);
	}

	async update(updateIssueDto: UpdateIssueDto): Promise<Issue> {
		const issue = await this.issuesRepository.findByPk(updateIssueDto.id);
		issue.title = updateIssueDto.title;
		issue.description = updateIssueDto.description;
		await issue.save();
		return issue;
	}

	async findAll(): Promise<Issue[]> {
		return this.issuesRepository.findAll<Issue>();
	}
}
