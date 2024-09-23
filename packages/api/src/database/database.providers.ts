import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { Issue } from '../issues/models/issue.model';

export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
			const sequelize = new Sequelize({
				dialect: 'postgres' as Dialect,
				host: process.env.POSTGRESDB_URI,
				port: parseInt(process.env.POSTGRESDB_PORT),
				username: process.env.POSTGRESDB_USERNAME,
				password: process.env.POSTGRESDB_PASSWORD,
				database: 'nestjs',
			});
			sequelize.addModels([Issue]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
