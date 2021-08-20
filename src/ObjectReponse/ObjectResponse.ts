import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ObjectResponse{

    constructor(message){
        this.message = message;
    }

    @Field()
    message:String;
}