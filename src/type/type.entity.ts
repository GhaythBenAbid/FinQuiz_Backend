import { Field, ObjectType } from "@nestjs/graphql";
import { field } from "src/field/field.entity";
import { FieldValues } from "src/fieldvalues/fieldvalues.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Type{
    @Field()
    @PrimaryGeneratedColumn()
    id : Number;
    
    @Field()
    @Column()
    type : string;
    
    @OneToMany(() => FieldValues , fieldvalue => fieldvalue.type)
    fieldvalues : FieldValues[];
    
    @OneToMany(() => field , field => field.type)
    field : field[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
}