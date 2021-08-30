import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewQuestionGeneration{
    @Field()
    points:Number;
    
    @Field()
    name:String;
    
    @Field()
    level:Number;
    
    @Field()
    weight:Number;

    @Field({nullable : true})
    sub_topic_id : Number;

    @Field()
    topic_id : Number;

    @Field()
    function : Number;

    @Field()
    difference_variation : Number;
}