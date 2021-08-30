import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateQuizInput{
    @Field()
    title:String;

    @Field()
    minimum_level : Number;

    @Field()
    maximum_level : Number;

    @Field()
    languageid : Number;

    @Field()
    questions_total : Number;
}