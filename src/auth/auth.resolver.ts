import { BadRequestException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'; 
import { LoginType } from './types/login.type';
import { loginInput } from './inputs/login.input';
import { AuthGuard } from './auth.guard';

@Resolver()
export class AuthResolver {

    constructor(private readonly userService: UserService) { }


    @Query(() => LoginType)
    async login(@Args('input') loginInput: loginInput) {
        const user = await this.userService.findOne(loginInput.email);

        if (!user) {
            throw new BadRequestException('invalid credenatiles');
        }

        if (!await bcrypt.compare(loginInput.password, user.password)) {
            throw new BadRequestException('wrong password');
        }

        const jwt = await this.userService.createToken(user);

        const {password , ...resultat} = user;

        return {
            "token" : jwt,
            "user" : resultat,
        }

    }



}
