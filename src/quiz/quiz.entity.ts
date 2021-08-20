import { Field, ObjectType } from "@nestjs/graphql";
import { Language } from "src/language/language.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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
    
    @Field(type => Language)
    @ManyToOne(() => Language , language => language.id , {onDelete:"CASCADE"})
    @JoinColumn({ name: "language_id" })
    language : Language;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}