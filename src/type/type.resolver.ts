import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { NewType } from './inputs/NewType.input';
import { Type } from './type.entity';
import { TypeService } from './type.service';

@Resolver()
export class TypeResolver {
    constructor(private readonly typeService : TypeService){}

    @Query(() => [Type])
    async GetAllTypes(){
        return this.typeService.findall();
    }


    @Mutation(()=>Type)
    async CreateNewType(@Args('Type') type : NewType ){
        return this.typeService.CreateNewType(type);

    }

    @Mutation(()=>ObjectResponse)
    async DeleteType(@Args('Type_id') type_id : Number ){
        return this.typeService.DeleteType(type_id);

    }
}
