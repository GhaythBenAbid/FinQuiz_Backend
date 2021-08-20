import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateField{
    @Field()
    id : Number;

    @Field({nullable : true})
    position : Number;
    
    @Field({nullable : true})
    default_value:String;
    
    @Field({nullable : true})
    field_clone_id : Number;
    
    @Field({nullable : true})
    field_different_id : Number;
    
    @Field({nullable : true})
    min_value : Number;
    
    @Field({nullable : true})
    max_value : Number;
    
    @Field({nullable : true})
    variation_step : Number;

    @Field({nullable : true})
    type_id : Number;

    @Field({nullable : true})
    question_generation_id : Number;
}