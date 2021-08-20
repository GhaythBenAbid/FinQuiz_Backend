import { Test, TestingModule } from '@nestjs/testing';
import { FieldvaluesService } from './fieldvalues.service';

describe('FieldvaluesService', () => {
  let service: FieldvaluesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldvaluesService],
    }).compile();

    service = module.get<FieldvaluesService>(FieldvaluesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
