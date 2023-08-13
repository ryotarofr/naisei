import { Test, TestingModule } from '@nestjs/testing';
import { NaiseiController } from './naisei.controller';

describe('NaiseiController', () => {
  let controller: NaiseiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaiseiController],
    }).compile();

    controller = module.get<NaiseiController>(NaiseiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
