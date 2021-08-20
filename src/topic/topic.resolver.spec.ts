import { Test, TestingModule } from '@nestjs/testing';
import { TopicResolver } from './topic.resolver';

describe('TopicResolver', () => {
  let resolver: TopicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopicResolver],
    }).compile();

    resolver = module.get<TopicResolver>(TopicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
