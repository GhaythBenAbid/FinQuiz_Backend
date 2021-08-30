import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { LanguageModule } from './language/language.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { QuestiongenerationModule } from './questiongeneration/questiongeneration.module';
import { TopicModule } from './topic/topic.module';
import { SubtopicModule } from './subtopic/subtopic.module';
import { FieldModule } from './field/field.module';
import { FieldvaluesModule } from './fieldvalues/fieldvalues.module';
import { TypeModule } from './type/type.module';
import { QuizquestionModule } from './quizquestion/quizquestion.module';
import { ExamModule } from './exam/exam.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      context : ({req}) => ({headers : req.hearders}),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ProjetFinQuiz',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    LanguageModule,
    QuizModule,
    QuestionModule,
    QuestiongenerationModule,
    TopicModule,
    SubtopicModule,
    FieldModule,
    FieldvaluesModule,
    TypeModule,
    QuizquestionModule,
    ExamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
