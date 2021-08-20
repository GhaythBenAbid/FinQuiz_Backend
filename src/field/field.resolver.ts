import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { field } from './field.entity';
import { FieldService } from './field.service';
import { NewField } from './input/NewField.input';
import { UpdateField } from './input/UpdateField.input';

@Resolver()
export class FieldResolver {

    constructor(private readonly fieldService : FieldService){}

    @Query(()=>[field])
    async GetAllFields(){
        return this.fieldService.findall();
    }

    @Query(()=>[field])
    async GetAllFieldsByGeneratorID(@Args('question_generation_id') question_generation_id : Number){
        return this.fieldService.findByQuestionGeneratorID(question_generation_id);
    }

    @Mutation(() => field)
    async CreateNewField(@Args("field") field : NewField){

        return await this.fieldService.CreateNewField(field);

    }

    @Mutation(() => ObjectResponse)
    async DeleteField(@Args("field_id") field_id : Number){
        return await this.fieldService.DeleteField(field_id);

    }

    @Query(() => field)
    async GetFieldByID(@Args("field_id") field_id : Number){
        return await this.fieldService.getFieldByID(field_id);

    }


    @Mutation(() => field)
    async UpdateField(@Args('updatedField') updatedField : UpdateField){
        return await this.fieldService.UpdateField(updatedField);
    }


    


}
