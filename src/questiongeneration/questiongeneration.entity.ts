import { Field, ObjectType } from "@nestjs/graphql";
import { field } from "src/field/field.entity";
import { Question } from "src/question/question.entity";
import { SubTopic } from "src/subtopic/subtopic.entity";
import { Topic } from "src/topic/topic.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class QuestionGeneration{

    @Field()
    @PrimaryGeneratedColumn()
    id:Number;
    
    @Field()
    @Column()
    name:string;

    @Field()
    @Column()
    points:Number;
    
    @Field()
    @Column()
    level:Number;
    
    @Field()
    @Column()
    weight:Number;
    
    @Field(type => SubTopic , {nullable : true})
    @ManyToOne(()=>SubTopic , subTopic => subTopic.id , {onDelete:"CASCADE" , nullable : true} )
    @JoinColumn({ name: "sub_topic_id" })
    sub_topic : SubTopic;
    
    @Field(type => Topic)
    @ManyToOne(()=>Topic , topic => topic.id , {onDelete:"CASCADE"})
    @JoinColumn({ name: "topic_id" })
    topic : Topic;

    @OneToMany(()=>Question , question => question.QuestionGeneration)
    question : Question[];
    
    
    @OneToMany(()=>field , field => field.question_generation)
    field : field[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;




}