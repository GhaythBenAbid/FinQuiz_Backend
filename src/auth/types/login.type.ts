import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";



@ObjectType()
export class LoginType{

    @Field()
    token : String;

    
    @Field()
    user : User;
}
