import { Field, ObjectType } from "@nestjs/graphql";
import { Topic } from "src/topic/topic.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class SubTopic{
    @Field()
    @PrimaryGeneratedColumn()
    id:Number;

    @Field()
    @Column()
    short_name : string;

    @Field()
    @Column()
    name : string;

    @Field()
    @Column()
    level : Number

    @Field(type => Topic)
    @ManyToOne(()=>Topic , topic => topic.id , {onDelete : 'CASCADE'})
    @JoinColumn({ name: "topic_id" })
    topic : Topic;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}