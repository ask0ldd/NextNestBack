import { Test, TestingModule } from '@nestjs/testing';
import { StartupsService } from './startups.service';
import { mockStartups } from '../mocks/mockStartups';

describe('StartupService', () => {
  let service: StartupsService;

  beforeEach(async () => {
    // jest.mock('../constants/startups', () => mockStartups);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StartupsService,
        { provide: 'STARTUPS_DATA', useValue: mockStartups },
      ],
    }).compile();

    service = module.get<StartupsService>(StartupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be mockstartup 1', () => {
    expect(service.findOne(1)).toBe(mockStartups[0])
  })
});
