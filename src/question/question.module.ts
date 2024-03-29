import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([Question]),
    ]
})
export class QuestionModule {}
