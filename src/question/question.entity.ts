import { Language } from "src/language/language.entity";
import { QuestionGeneration } from "src/questiongeneration/questiongeneration.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Question{

    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    level : Number;

    @Column()
    weight : Number;

    @ManyToOne(() => Language , language => language.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "language_id" })
    Language : Language;

    @ManyToOne(() => QuestionGeneration , questionGeneration => questionGeneration.id , {onDelete : "CASCADE"})
    @JoinColumn({ name: "question_generation_id" })
    QuestionGeneration : QuestionGeneration;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}