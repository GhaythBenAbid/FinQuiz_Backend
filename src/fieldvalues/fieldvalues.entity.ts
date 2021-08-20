import { Field, ObjectType  } from "@nestjs/graphql";
import { field } from "src/field/field.entity";
import { Language } from "src/language/language.entity";
import { Type } from "src/type/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class FieldValues {
    
    @Field( )
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Field()
    @Column()
    wording: string;
    
    @Field()
    @Column()
    value: string;
    
    @Field(type => Type)
    @ManyToOne(() => Type , type => type.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "type_id" })
    type: Type;
    
    @Field(type => Language)
    @ManyToOne(() => Language, language => language.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "language_id" })
    language: Language;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}