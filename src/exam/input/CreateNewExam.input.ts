import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNewExam{
    @Field()
    certification : string;

    @Field()
    class : string;

    @Field(type => String)
    exam_date : Date;

    @Field()
    exam_duration : Number;

    @Field()
    success_percentage : Number;




    @Field()
    quiz_id : Number;
    
}