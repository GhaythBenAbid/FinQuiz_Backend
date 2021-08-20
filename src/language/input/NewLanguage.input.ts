import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewLanguage {


    @Field()
    name: string;

    @Field()
    short_name: string;

}