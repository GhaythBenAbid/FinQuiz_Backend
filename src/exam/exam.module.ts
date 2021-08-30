import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamResolver } from './exam.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.entity';
import { Quiz } from 'src/quiz/quiz.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Exam , Quiz])],
  providers: [ExamService, ExamResolver]
})
export class ExamModule {}
