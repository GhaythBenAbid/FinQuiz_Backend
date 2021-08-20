import { Field, ObjectType } from "@nestjs/graphql";
import { FieldValues } from "src/fieldvalues/fieldvalues.entity";
import { QuestionGeneration } from "src/questiongeneration/questiongeneration.entity";
import { Type } from "src/type/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class field{
    @Field()
    @PrimaryGeneratedColumn()
    id : Number;
    
    @Field()
    @Column()
    position : Number;
    
    @Field({nullable : true})
    @Column({nullable : true})
    default_value:string;
    
    @Field({nullable : true})
    @Column({nullable : true})
    field_clone_id : Number;
    
    @Field({nullable : true})
    @Column({nullable : true})
    field_different_id : Number;
    
    @Field({nullable : true})
    @Column({nullable : true , type : "float"})
    min_value : Number;
    
    @Field({nullable : true})
    @Column({nullable : true , type : "float"})
    max_value : Number;
    
    @Field({nullable : true})
    @Column({nullable : true ,  type : "float"})
    variation_step : Number;

    @Field()
    @ManyToOne(()=>Type , type => type.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "type_id" })
    type : Type;
    
    @Field()
    @ManyToOne(() => QuestionGeneration , questionGeneration => questionGeneration.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "question_generation_id" })
    question_generation : QuestionGeneration;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}