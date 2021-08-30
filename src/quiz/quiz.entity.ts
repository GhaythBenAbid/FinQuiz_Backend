import { Field, ObjectType } from "@nestjs/graphql";
import { Exam } from "src/exam/exam.entity";
import { Language } from "src/language/language.entity";
import { QuizQuestion } from "src/quizquestion/quizquestion.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class Quiz{
    @Field()
    @PrimaryGeneratedColumn()
    id:Number
    
    @Field()
    @Column()
    title:string;
    
    @Field()
    @Column()
    minimum_level:Number;
    
    @Field()
    @Column()
    maximum_level:Number;

    @Field()
    @Column()
    questions_total : Number;

    @Field(type => Language)
    @ManyToOne(() => Language , language => language.id , {onDelete:"CASCADE"})
    @JoinColumn({ name: "language_id" })
    language : Language;

    @Field(type => [QuizQuestion])
    @OneToMany(() => QuizQuestion , quizquestion => quizquestion.quiz)
    quiz_question : QuizQuestion[];

    @Field(type => Exam)
    @OneToMany(() => Exam , exam => exam.quiz)
    exam : Exam[];


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}