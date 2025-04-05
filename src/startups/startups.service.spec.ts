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

  it('should return the expected mockStartup when calling findOne with a valid id', () => {
    expect(service.findOne(1)).toBe(mockStartups[0])
  })

  it('should return undefined when calling findOne with an invalid id', () => {
    expect(service.findOne(999)).toBeUndefined()
  })

  it('should return mockstartups when calling findAll', () => {
    expect(service.findAll()).toBe(mockStartups)
  })
});
