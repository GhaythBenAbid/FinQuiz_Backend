import { Test, TestingModule } from '@nestjs/testing';
import { LanguageResolver } from './language.resolver';

describe('LanguageResolver', () => {
  let resolver: LanguageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageResolver],
    }).compile();

    resolver = module.get<LanguageResolver>(LanguageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
