import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class CustomLogger extends ConsoleLogger {
	customLog() {
		this.log('@windsor/logger TBA');
	}
}
