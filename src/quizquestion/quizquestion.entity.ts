import { Field, ObjectType } from "@nestjs/graphql";
import { QuestionGeneration } from "src/questiongeneration/questiongeneration.entity";
import { Quiz } from "src/quiz/quiz.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export class QuizQuestion{
    @Field(type => Quiz)
    @ManyToOne(() => Quiz , quiz => quiz.id , {primary : true , onDelete:"CASCADE"})
    @JoinColumn({name : "quiz_id"})
    quiz : Quiz;
    
    @Field(type => QuestionGeneration)
    @ManyToOne(() => QuestionGeneration , questiongeneration => questiongeneration.id , {primary : true , onDelete:"CASCADE"})
    @JoinColumn({name : "question_generation_id"})
    question_generation : QuestionGeneration;


    @Field()
    @Column()
    number_of_questions : Number;

}