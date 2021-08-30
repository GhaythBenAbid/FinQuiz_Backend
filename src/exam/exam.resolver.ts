import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Exam } from './exam.entity';
import { ExamService } from './exam.service';
import { CreateNewExam } from './input/CreateNewExam.input';

@Resolver()
export class ExamResolver {

    constructor(private readonly examService : ExamService){}


    @Query(() => [Exam])
    async GetAllExams(){
        return await this.examService.findall();
    }

    @Query(() => Exam)
    async GetExamById(@Args('exam_id') exam_id : Number){
        return await this.examService.findById(exam_id);
    }

    @Mutation(() => Exam)
    async CreateNewExam(@Args('exam') exam : CreateNewExam){
        return await this.examService.createNewExam(exam);

    }

    @Mutation(() => ObjectResponse)
    async DeleteExam(@Args('exam_id') exam_id : Number){
        return await this.examService.deleteExam(exam_id);
    }




}
