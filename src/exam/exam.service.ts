import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Quiz } from 'src/quiz/quiz.entity';
import { Repository } from 'typeorm';
import { Exam } from './exam.entity';

@Injectable()
export class ExamService {
    constructor(
        @InjectRepository(Exam) private readonly examRepository : Repository<Exam>,
        @InjectRepository(Quiz) private readonly quizRepository : Repository<Quiz>
        ){}


    async findall(){
        return await this.examRepository.find({relations : ["quiz" , "quiz.language" , "quiz.quiz_question"]});
    }

    async findById(exam_id){
        
        return await this.examRepository.findOne({id : exam_id} , {relations : ["quiz" , "quiz.language"]});
    }

    async createNewExam(exam){
        const quiz = await this.quizRepository.findOne({id : exam.quiz_id});

        return await this.examRepository.save({
            certification : exam.certification,
            class : exam.class,
            exam_date : exam.exam_date,
            quiz : quiz,
            exam_duration : exam.exam_duration,
            success_percentage : exam.success_percentage,

        });
    }

    async deleteExam(exam_id){

        const exam = await this.examRepository.findOne({id : exam_id});


        if(exam){
            await this.examRepository.remove(exam);
            return new ObjectResponse("Exam has been deleted successfully");
        }else{
            throw new NotFoundException("EXAM NOT FOUND");
        }

    }





}
