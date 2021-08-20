import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';
import { TopicResolver } from './topic.resolver';

@Module({
    imports:[
        TypeOrmModule.forFeature([Topic]),
    ],
    providers: [TopicService, TopicResolver]
})
export class TopicModule {}
