import { Test, TestingModule } from '@nestjs/testing';
import { ContributesService } from './contributes.service';

describe('ContributesService', () => {
  let service: ContributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContributesService],
    }).compile();

    service = module.get<ContributesService>(ContributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
