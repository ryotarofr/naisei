import { Test, TestingModule } from '@nestjs/testing';
import { NaiseiService } from './naisei.service';

describe('NaiseiService', () => {
  let service: NaiseiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaiseiService],
    }).compile();

    service = module.get<NaiseiService>(NaiseiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
