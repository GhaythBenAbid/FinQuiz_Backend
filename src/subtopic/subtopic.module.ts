import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubTopic } from './subtopic.entity';
import { SubtopicService } from './subtopic.service';
import { SubtopicResolver } from './subtopic.resolver';
import { Topic } from 'src/topic/topic.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([SubTopic , Topic]),
    ],
    providers: [SubtopicService, SubtopicResolver]
})
export class SubtopicModule {}
