import { ApiProperty } from '@nestjs/swagger';
import {
	Table,
	Column,
	Model,
	DataType,
	CreatedAt,
	UpdatedAt,
	DeletedAt,
} from 'sequelize-typescript';

@Table({
	tableName: 'issue',
})
export class Issue extends Model<Issue> {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id: string;

	@ApiProperty({ example: 'This is the issue title' })
	@Column({ type: DataType.STRING(35) })
	title: string;

	@ApiProperty({
		example: 'This is the issue description',
	})
	@Column({ type: DataType.STRING(35) })
	description: string;

	@CreatedAt
	@Column({ field: 'created_at' })
	createdAt: Date;

	@UpdatedAt
	@Column({ field: 'updated_at' })
	updatedAt: Date;

	@DeletedAt
	@Column({ field: 'deleted_at' })
	deletedAt: Date;
}
