import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { RegisterInput } from './inputs/register.input';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Mutation(() => User)
    async register(@Args('register') registerInput : RegisterInput){

        const hashedpassword = await bcrypt.hash(registerInput.password , 12);

        return await this.userService.create({
            username : registerInput.username,
            firstname : registerInput.firstname,
            lastname : registerInput.lastname,
            banquename : registerInput.banquename,
            numtel : registerInput.numtel,
            role : registerInput.role,
            email : registerInput.email,
            password : hashedpassword,


        })
        
    }

}
