import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/language/language.entity';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz> ,
    @InjectRepository(Language) private readonly languageRepository: Repository<Language>){}

    async createQuiz(quiz : any){
        const language = await this.languageRepository.findOne({id : quiz.languageid});


        return await this.quizRepository.save({
            title : quiz.title,
            maximum_level : quiz.maximum_level,
            minimum_level : quiz.minimum_level,
            language : language,
            questions_total : quiz.questions_total,
        })        
    }


    async findall(){
        return await this.quizRepository.find( {relations : ["language"]} );
    }


    async DeleteQuiz(quiz_id){
        const quiz = await this.quizRepository.findOne({id : quiz_id});

        if(quiz){
            await this.quizRepository.remove(quiz);
            return new ObjectResponse("the quiz has been deleted successfully");
        }else{
            throw new NotFoundException("Quiz NOT FOUND");
        }
    }


    async GetQuizByID(quiz_id){
        const quiz = await this.quizRepository.findOne({id : quiz_id } , {relations : ["language"]});

        if(quiz){
            return quiz;
        }else{
            throw new NotFoundException("Quiz NOT FOUND");
        }
    }



}
