import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { CreateQuizInput } from './Inputs/CreateQuiz.input';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Resolver()
export class QuizResolver {

    constructor(private readonly quizService : QuizService){}

    @Mutation(()=>Quiz)
    async CreateQuiz(@Args('newQuiz') newQuiz : CreateQuizInput){
        return await this.quizService.createQuiz(newQuiz);

    }
    
    @Query(()=>[Quiz])
    async GetAllQuizzes(){
        return await this.quizService.findall();
    }
    
    @Mutation(()=>ObjectResponse)
    async DeleteQuiz(@Args('quiz_id') quiz_id : Number){
        return await this.quizService.DeleteQuiz(quiz_id);

    }


    @Query(() => Quiz)
    async GetQuizByID(@Args('quiz_id') quiz_id : Number){
        return await this.quizService.GetQuizByID(quiz_id);
    }

}
