import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Repository } from 'typeorm';
import { Type } from './type.entity';

@Injectable()
export class TypeService {

    constructor(@InjectRepository(Type) private readonly typeRepository : Repository<Type>){}


    async findall(){
        return await this.typeRepository.find();
    }

    async CreateNewType(type : any){
        return await this.typeRepository.save(type);
    }

    async DeleteType(type_id){
        const type = await this.typeRepository.findOne({id : type_id});

        if(type){
            await this.typeRepository.remove(type);
            return new ObjectResponse("the type has been deleted successfully");
        }else{
            throw new NotFoundException("Type NOT FOUND");
        }

    }







}
