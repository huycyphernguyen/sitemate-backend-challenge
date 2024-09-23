import { Test, TestingModule } from '@nestjs/testing';
import { IssuesController } from './issues.controller';
import { CreateIssueDto } from './dto/create-issue.dto';
import { IssuesService } from './issues.service';

describe('IssuesController', () => {
	let controller: IssuesController;
	let service: IssuesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [IssuesController],
			providers: [
				{
					provide: IssuesService,
					useValue: {
						findAll: jest.fn().mockResolvedValue([
							{
								name: 'Cat #1',
								breed: 'Bread #1',
								age: 4,
							},
							{
								name: 'Cat #2',
								breed: 'Breed #2',
								age: 3,
							},
							{
								name: 'Cat #3',
								breed: 'Breed #3',
								age: 2,
							},
						]),
						create: jest
							.fn()
							.mockImplementation((createIssueDto: CreateIssueDto) =>
								Promise.resolve({ _id: '1', ...createIssueDto }),
							),
					},
				},
			],
		}).compile();

		controller = module.get(IssuesController);
		service = module.get(IssuesService);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	describe('create()', () => {
		it('should create a new cat', async () => {
			const createIssueDto: CreateIssueDto = {
				name: 'Cat #1',
				description: 'Breed #1',
			};

			expect(controller.create(createIssueDto)).resolves.toEqual({
				_id: '1',
				...createIssueDto,
			});
		});
	});

	describe('findAll()', () => {
		it('should get an array of Issues', () => {
			expect(controller.findAll()).resolves.toEqual([
				{
					name: 'Cat #1',
					breed: 'Bread #1',
					age: 4,
				},
				{
					name: 'Cat #2',
					breed: 'Breed #2',
					age: 3,
				},
				{
					name: 'Cat #3',
					breed: 'Breed #3',
					age: 2,
				},
			]);
		});
	});
});
