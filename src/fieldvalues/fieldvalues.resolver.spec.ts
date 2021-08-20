import { Test, TestingModule } from '@nestjs/testing';
import { FieldvaluesResolver } from './fieldvalues.resolver';

describe('FieldvaluesResolver', () => {
  let resolver: FieldvaluesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldvaluesResolver],
    }).compile();

    resolver = module.get<FieldvaluesResolver>(FieldvaluesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
