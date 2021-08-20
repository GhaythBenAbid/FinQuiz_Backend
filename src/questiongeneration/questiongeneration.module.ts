import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionGeneration } from './questiongeneration.entity';
import { QuestiongenerationService } from './questiongeneration.service';
import { QuestiongenerationResolver } from './questiongeneration.resolver';
import { SubTopic } from 'src/subtopic/subtopic.entity';
import { Topic } from 'src/topic/topic.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([QuestionGeneration , SubTopic , Topic]),
    ],
    providers: [QuestiongenerationService, QuestiongenerationResolver]
})
export class QuestiongenerationModule {}
