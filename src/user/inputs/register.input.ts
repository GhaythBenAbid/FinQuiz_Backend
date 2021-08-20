import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class RegisterInput {
    @Field()
    username: string;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    banquename: string;

    @Field()
    numtel: string;

    @Field()
    role: string;

    @Field()
    email: string;

    @Field()
    password: string;


}