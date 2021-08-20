import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewQuizQuestion } from './input/NewQuizQuestion.input';
import { QuizQuestion } from './quizquestion.entity';
import { QuizquestionService } from './quizquestion.service';

@Resolver()
export class QuizquestionResolver {

    constructor(private readonly quizquestionService : QuizquestionService){}

    @Query(() => [QuizQuestion])
    async GetAllQuizQuestions(){
        return await this.quizquestionService.findall();
    }

    @Query(() => [QuizQuestion])
    async GetQuizQuestionsByQuizID(@Args("quiz_id") quiz_id : Number){
        return await this.quizquestionService.findbyQuizID(quiz_id);
    }

    @Mutation(() => QuizQuestion)
    async CreateNewQuizQuestion(@Args('QuizQuestion') quizQuestion : NewQuizQuestion){
        return await this.quizquestionService.CreateQuizQuestion(quizQuestion);
    }

}
