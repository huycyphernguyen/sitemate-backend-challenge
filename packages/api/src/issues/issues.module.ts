import { Module } from '@nestjs/common';
import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';
import { issuesProviders } from './issues.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [IssuesController],
	providers: [IssuesService, ...issuesProviders],
	exports: [IssuesService],
})
export class IssuesModule {}
