import { Test, TestingModule } from '@nestjs/testing';
import { StartupsController } from './startups.controller';
import { StartupsService } from './startups.service';
import { mockStartups } from '../mocks/mockStartups';
import { NotFoundException } from '@nestjs/common';

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

    it('should call startupsService.findOne and return MockData Inc. data', () => {
        const spiedOnService = jest.spyOn(startupsService, 'findOne').mockImplementation(() => mockStartups[0])
        expect(spiedOnService).toHaveBeenCalledTimes(0)
        expect(startupsController.getStartup("0")).toBe(mockStartups[0])
        expect(spiedOnService).toHaveBeenCalledTimes(1)
    })

    it('should throw a NotFoundException when startupsService.findOne ask for a non existing startup', () => {
        const spiedOnService = jest.spyOn(startupsService, 'findOne').mockReturnValueOnce(undefined)
        expect(spiedOnService).toHaveBeenCalledTimes(0)
        expect(() => startupsController.getStartup("0")).toThrow(NotFoundException)
        expect(spiedOnService).toHaveBeenCalledTimes(1)
    })

    it('should call startupsService.findOne and return MockData Inc. data', () => {
        const spiedOnService = jest.spyOn(startupsService, 'findAll').mockImplementation(() => mockStartups)
        expect(spiedOnService).toHaveBeenCalledTimes(0)
        expect(startupsController.getStartups()).toBe(mockStartups)
        expect(spiedOnService).toHaveBeenCalledTimes(1)
    })
});
