import { Field, ObjectType } from "@nestjs/graphql";
import { SubTopic } from "src/subtopic/subtopic.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Topic{
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
    level : Number;


    @Field(type => SubTopic ,  {nullable : true})
    @OneToMany(()=>SubTopic , subtopic => subtopic.topic)
    subtopic : SubTopic[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}