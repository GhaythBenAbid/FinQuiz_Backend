import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { NewQuestionGeneration } from './input/questionGeneration.input';
import { QuestionGeneration } from './questiongeneration.entity';
import { QuestiongenerationService } from './questiongeneration.service';

@Resolver()
export class QuestiongenerationResolver {
    constructor(private readonly questionGenerationService : QuestiongenerationService){}

    @Query(()=>[QuestionGeneration])
    async GetAllQuestionGeneration(){
        return await this.questionGenerationService.findall();
    }

    @Query(()=>QuestionGeneration)
    async GetQuestionGenerationByID(@Args("question_generation_id") question_generation_id : Number ) {
        return await this.questionGenerationService.findOne(question_generation_id);
    }

    @Mutation(()=>QuestionGeneration)
    async CreateNewQuestionGeneration(@Args('questionGeneration') questionGeneration : NewQuestionGeneration ){
        return await this.questionGenerationService.CreateNewQuestionGenerator(questionGeneration);
    }

    @Mutation(() => ObjectResponse)
    async DeleteQuestionGeneration(@Args('question_generation_id') question_generation_id : Number){
        return await this.questionGenerationService.DeleteQuestionGenerator(question_generation_id);
    }

    @Query(() => [QuestionGeneration])
    async GetQuestionGenerationByTopicAndLevel(@Args('sub_topic_id') sub_topic_id : Number , @Args('min_level') min_level : Number , @Args('max_level') max_level : Number ){
        return await this.questionGenerationService.GetQuestionGeneratorByTopicAndLevel(sub_topic_id , min_level , max_level);
        
    }



}
