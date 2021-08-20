import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionGeneration } from 'src/questiongeneration/questiongeneration.entity';
import { Quiz } from 'src/quiz/quiz.entity';
import { Repository } from 'typeorm';
import { QuizQuestion } from './quizquestion.entity';

@Injectable()
export class QuizquestionService {

    constructor(
        @InjectRepository(QuizQuestion) private readonly quizquestionRepository : Repository<QuizQuestion>,
        @InjectRepository(Quiz) private readonly quizRepository : Repository<Quiz>,
        @InjectRepository(QuestionGeneration) private readonly questionGenerationRepository : Repository<QuestionGeneration>
        ){}



    async findall(){
        return await this.quizquestionRepository.find({relations : ["quiz" , "question_generation"]});
    }


    async findbyQuizID(quiz_id){
        const quiz = await this.quizRepository.findOne({id : quiz_id});

        if(quiz){

            return await this.quizquestionRepository.find({relations : ["quiz" , "question_generation"] , where : {quiz : quiz}});
        }else{
            throw new NotFoundException('Quiz NOT FOUND');
        }

    }


    async CreateQuizQuestion(quizQuestion){
        const quiz = await this.quizRepository.findOne({id : quizQuestion.quiz_id});

        const question_generation = await this.questionGenerationRepository.findOne({id : quizQuestion.question_generation_id});


        if(quiz && question_generation){
            return await this.quizquestionRepository.save({
                question_generation : question_generation,
                quiz : quiz,
                number_of_questions : quizQuestion.number_of_questions,
            });
        }else{
            throw new NotFoundException("Quiz or Question generation NOT FOUND");
        }
    }



}
