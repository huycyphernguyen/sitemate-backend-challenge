import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomLogger } from './utils/logger/custom-logger';

@Controller()
export class AppController {
	private readonly logger: CustomLogger;
	constructor(private readonly appService: AppService) {
		this.logger = new CustomLogger(AppController.name);
	}

	@Get()
	getHello(): string {
		this.logger.customLog();
		return this.appService.getHello();
	}
}
