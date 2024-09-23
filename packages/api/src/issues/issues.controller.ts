import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssuesService } from './issues.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Issue } from './models/issue.model';
import { UpdateIssueDto } from './dto/update-iusse.dto';

@ApiTags('Issues')
@Controller('issues')
export class IssuesController {
	constructor(private readonly issuesService: IssuesService) {}

	@Post()
	@ApiOperation({ summary: 'Create new issue' })
	async create(@Body() createIssueDto: CreateIssueDto) {
		return this.issuesService.create(createIssueDto);
	}

	@Patch()
	@ApiOperation({ summary: 'Create new issue' })
	async update(@Body() id: string, updateIssueDto: UpdateIssueDto) {
		return this.issuesService.update(id, updateIssueDto);
	}

	@Get()
	@ApiResponse({
		status: 200,
		description: 'The found record',
		type: [Issue],
	})
	async findAll(): Promise<Issue[]> {
		return this.issuesService.findAll();
	}
}
