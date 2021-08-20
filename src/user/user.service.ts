import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/auth/jwtConstants';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


    async findOne(email:string){
        const user : User = await this.userRepository.findOne({email : email});
        return user;
    }

    async createToken({id , email} : User){
        return await jwt.sign({id , email} , jwtConstants.secret);
    }

    async create(user:any){
        return await this.userRepository.save(user);
    }

    async findall(){
        return await this.userRepository.find();
    }



}
