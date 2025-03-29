import { Test, TestingModule } from '@nestjs/testing';
import { StartupsController } from './startups.controller';

describe('StartupsController', () => {
  let controller: StartupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartupsController],
    }).compile();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    controller = module.get<StartupsController>(StartupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
