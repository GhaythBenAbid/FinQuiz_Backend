import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class NewSubTopic {

    @Field()
    name: string;

    @Field()
    short_name: string;

    @Field()
    level: Number;

    @Field()
    topic_id:Number;
}