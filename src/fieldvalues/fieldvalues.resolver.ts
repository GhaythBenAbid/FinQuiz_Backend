import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { FieldValues } from './fieldvalues.entity';
import { FieldvaluesService } from './fieldvalues.service';
import { NewFieldValue } from './input/NewFieldValue.input';

@Resolver()
export class FieldvaluesResolver {
    constructor(private readonly fieldValuesService : FieldvaluesService){}

    @Query(()=>[FieldValues])
    async GetAllFieldValues(){
        return await this.fieldValuesService.findall();
    }

    @Query(()=>[FieldValues])
    async GetFieldValuesByType(@Args('type_id') type_id : Number){
        return await this.fieldValuesService.findFieldValuesByType(type_id);
    }

    @Mutation(()=>FieldValues)
    async CreateNewFieldValue(@Args('FieldValue') fieldValue : NewFieldValue){
        return await this.fieldValuesService.CreateNewFieldValue(fieldValue);
    }

    @Mutation(()=>ObjectResponse)
    async DeleteFieldValue(@Args('field_value_id') field_value_id : Number){
        return await this.fieldValuesService.DeleteFieldValue(field_value_id);
    }

}
