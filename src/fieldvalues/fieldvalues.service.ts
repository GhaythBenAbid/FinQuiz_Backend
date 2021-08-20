import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/language/language.entity';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Type } from 'src/type/type.entity';
import { Repository } from 'typeorm';
import { FieldValues } from './fieldvalues.entity';

@Injectable()
export class FieldvaluesService {
    constructor(
        @InjectRepository(FieldValues) private readonly fieldValuesRepository: Repository<FieldValues>,
        @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
        @InjectRepository(Language) private readonly languageRepository: Repository<Language>
    ) { }


    async findall() {
        return await this.fieldValuesRepository.find({ relations: ["language", "type"] });

    }

    async CreateNewFieldValue(NewFieldValue: any) {
        const type = await this.typeRepository.findOne({ id: NewFieldValue.type_id });
        const language = await this.languageRepository.findOne({ id: NewFieldValue.language_id });


        return await this.fieldValuesRepository.save({
            wording: NewFieldValue.wording,
            value: NewFieldValue.value,
            type: type,
            language: language,
        });

    }

    async findFieldValuesByType(type_id: Number) {
        const type = await this.typeRepository.findOne({ id: type_id });

        return await this.fieldValuesRepository.find({
            where: { type: type },
            relations: ["language", "type"],
        });
    }


    async DeleteFieldValue(field_value_id){
        const field_value = await this.fieldValuesRepository.findOne({id : field_value_id});

        if(field_value){
            await this.fieldValuesRepository.remove(field_value);
            return new ObjectResponse("The field value has been deleted successfully");
        }else{
            throw new NotFoundException("field value NOT FOUND");
        }
    }



    async 






}
