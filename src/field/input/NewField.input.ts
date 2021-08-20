import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class NewField{    
    @Field()
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

    @Field()
    type_id : Number;

    @Field()
    question_generation_id : Number;

}