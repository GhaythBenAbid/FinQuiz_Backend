import { Field, ObjectType } from "@nestjs/graphql";
import { Quiz } from "src/quiz/quiz.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Exam{
    @Field()
    @PrimaryGeneratedColumn()
    id:Number;

    @Field()
    @Column()
    certification : string;

    @Field()
    @Column()
    class : string;

    @Field()
    @Column({default : 20})
    exam_duration : Number;

    @Field()
    @Column({default : 50})
    success_percentage : Number;


    @Field(type => String)
    @Column({type : 'date'})
    exam_date : Date;

    @Field(type => Quiz)
    @ManyToOne(() => Quiz , quiz => quiz.id , {onDelete : "CASCADE"})
    @JoinColumn({name : "quiz_id"})
    quiz : Quiz;

}