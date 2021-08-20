import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewType{
    @Field()
    type : String;

}