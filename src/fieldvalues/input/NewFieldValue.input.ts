import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewFieldValue{

    @Field()
    wording: string;
    
    @Field()
    value: string;

    @Field()
    type_id : Number;

    @Field()
    language_id : Number;



}