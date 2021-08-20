import { Body, Controller, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService : QuizService){}

    @Post()
    async createQuiz(@Body('title') title : string , @Body('lvl') lvl : Number , @Body('language_id') languageid : Number ){
        return await this.quizService.createQuiz({title , lvl , languageid});

    }
}
