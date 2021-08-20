import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { QuestionGeneration } from 'src/questiongeneration/questiongeneration.entity';
import { Type } from 'src/type/type.entity';
import { Repository } from 'typeorm';
import { field } from './field.entity';

@Injectable()
export class FieldService {

    constructor(
        @InjectRepository(field) private readonly fieldRepository: Repository<field>,
        @InjectRepository(QuestionGeneration) private readonly questionGenerationRepository: Repository<QuestionGeneration>,
        @InjectRepository(Type) private readonly typeRepository: Repository<Type>
    ) { }

    async findall() {
        return await this.fieldRepository.find({ relations: ["type"] });
    }

    async findByQuestionGeneratorID(question_generation_id) {

        return await this.fieldRepository.createQueryBuilder("field")
            .leftJoinAndSelect("field.type", "type")
            .where("question_generation_id = :id", { id: question_generation_id })
            .orderBy("field.position")
            .getMany();

    }


    async CreateNewField(field: any) {
        const type = await this.typeRepository.findOne({ id: field.type_id });
        const question_generation = await this.questionGenerationRepository.findOne({ id: field.question_generation_id });


        return await this.fieldRepository.save({
            position : field.position,
            default_value : field.default_value,
            field_clone_id : field.field_clone_id,
            field_different_id : field.field_different_id,
            min_value : field.min_value,
            max_value : field.max_value,
            variation_step : field.variation_step,
            type : type,
            question_generation : question_generation,
        });

    }



    async DeleteField(field_id){
        const field = await this.fieldRepository.findOne({id : field_id});

        if(field){
            await this.fieldRepository.remove(field);
            return new ObjectResponse("the Field has been deleted successfully");
        }else{
            throw new NotFoundException("Field NOT FOUND");
        }
        
    }
    
    
    async getFieldByID(field_id){
        const field = await this.fieldRepository.findOne({id : field_id});
        
        if(field){
            return field;
        }else{
            throw new NotFoundException("Field NOT FOUND");
        }

    }


    async UpdateField(Updatedfield){
        var field = await this.fieldRepository.findOne({id : Updatedfield.id} , {relations : ["type" , "question_generation"]});

        const type = await this.typeRepository.findOne({id : Updatedfield.type_id});
        
        if(type){
            Updatedfield.type = type;
        }
        
        const question_generation = await this.questionGenerationRepository.findOne({id : Updatedfield.question_generation_id});

        if(question_generation){
            Updatedfield.question_generation = question_generation;
        }
        


        if(field){
            
            return await this.fieldRepository.save({
                ...field,
                ...Updatedfield,
            });

            
            
        }else{
            throw new NotFoundException("Field NOT FOUND");
        }

    }



}
