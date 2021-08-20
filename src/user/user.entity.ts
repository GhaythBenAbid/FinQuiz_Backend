import { Field, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: Number;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column()
    firstname: string;

    @Field()
    @Column()
    lastname: string;

    @Field()
    @Column()
    banquename: string;

    @Field()
    @Column()
    numtel: string;

    @Field()
    @Column()
    role: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}