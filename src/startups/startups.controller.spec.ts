import { Test, TestingModule } from '@nestjs/testing';
import { StartupsController } from './startups.controller';
import { StartupsService } from './startups.service';
import { mockStartups } from '../mocks/mockStartups';

describe('StartupsController', () => {
    let startupsController: StartupsController;
    let startupsService : StartupsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
        controllers: [StartupsController],
        providers: [
            StartupsService,
            { provide: 'STARTUPS_DATA', useValue: mockStartups },
        ],
        }).compile();

        startupsService = module.get<StartupsService>(StartupsService);
        startupsController = module.get<StartupsController>(StartupsController);
    });

    it('should be defined', () => {
        expect(startupsController).toBeDefined();
    });

    it('it should call startupsService.findOne and get MockData Inc. data', () => {
        const spiedOnService = jest.spyOn(startupsService, 'findOne').mockImplementation(() => mockStartups[0])
        expect(spiedOnService).toHaveBeenCalledTimes(0)
        expect(startupsController.getStartup("0")).toBe(mockStartups[0])
        expect(spiedOnService).toHaveBeenCalledTimes(1)
    })
});
