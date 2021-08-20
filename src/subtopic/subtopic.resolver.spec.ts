import { Test, TestingModule } from '@nestjs/testing';
import { SubtopicResolver } from './subtopic.resolver';

describe('SubtopicResolver', () => {
  let resolver: SubtopicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtopicResolver],
    }).compile();

    resolver = module.get<SubtopicResolver>(SubtopicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
