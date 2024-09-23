import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateIssueDto {
	@IsString()
	@ApiProperty({
		example: 'Issue 1 title',
	})
	readonly title: string;

	@IsString()
	@ApiProperty({
		example: 'Issue 1 description',
	})
	readonly description: string;
}
