import { Module } from '@nestjs/common';
import { QuizquestionService } from './quizquestion.service';
import { QuizquestionResolver } from './quizquestion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestion } from './quizquestion.entity';
import { Quiz } from 'src/quiz/quiz.entity';
import { QuestionGeneration } from 'src/questiongeneration/questiongeneration.entity';

@Module({
  imports : [TypeOrmModule.forFeature([QuizQuestion , Quiz , QuestionGeneration])],
  providers: [QuizquestionService, QuizquestionResolver]
})
export class QuizquestionModule {}
