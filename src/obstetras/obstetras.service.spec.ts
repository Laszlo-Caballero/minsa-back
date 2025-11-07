import { Test, TestingModule } from '@nestjs/testing';
import { ObstetrasService } from './obstetras.service';

describe('ObstetrasService', () => {
  let service: ObstetrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObstetrasService],
    }).compile();

    service = module.get<ObstetrasService>(ObstetrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
