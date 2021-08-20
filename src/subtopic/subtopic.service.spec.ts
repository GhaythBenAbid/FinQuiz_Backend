import { Test, TestingModule } from '@nestjs/testing';
import { SubtopicService } from './subtopic.service';

describe('SubtopicService', () => {
  let service: SubtopicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtopicService],
    }).compile();

    service = module.get<SubtopicService>(SubtopicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
