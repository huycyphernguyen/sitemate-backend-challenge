import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesModule } from './issues/issues.module';

@Module({
	imports: [DatabaseModule, ConfigModule.forRoot(), IssuesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
