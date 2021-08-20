import { Field, ObjectType } from "@nestjs/graphql";
import { FieldValues } from "src/fieldvalues/fieldvalues.entity";
import { Question } from "src/question/question.entity";
import { Quiz } from "src/quiz/quiz.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Language{
    @Field()
    @PrimaryGeneratedColumn()
    id : Number;

    @Field()
    @Column()
    name : string;

    @Field()
    @Column()
    short_name : string;

    
    @OneToMany(() => Quiz , quiz => quiz.language)
    quiz : Quiz[];
    
    @OneToMany(() => Question , question => question.Language)
    questions : Question[];
    
    @OneToMany(() => FieldValues , fieldValues => fieldValues.language)
    FieldValues : FieldValues[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}