import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class NewQuizQuestion{
    @Field()
    quiz_id : Number;

    @Field()
    question_generation_id : Number;

    @Field()
    number_of_questions : Number;
}