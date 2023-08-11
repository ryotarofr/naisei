import { Test, TestingModule } from '@nestjs/testing';
import { ContributesController } from './contributes.controller';

describe('ContributesController', () => {
  let controller: ContributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContributesController],
    }).compile();

    controller = module.get<ContributesController>(ContributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
