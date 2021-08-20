import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewTopic{


    @Field()
    short_name : string;

    @Field()
    name : string;

    @Field()
    level : Number;

}