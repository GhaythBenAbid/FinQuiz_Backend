import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from 'src/language/language.entity';
import { LanguageModule } from 'src/language/language.module';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizResolver } from './quiz.resolver';

@Module({
    imports : [
        TypeOrmModule.forFeature([Quiz , Language]),
    ],
    providers: [QuizService, QuizResolver],
    controllers: [QuizController]
})
export class QuizModule {}
