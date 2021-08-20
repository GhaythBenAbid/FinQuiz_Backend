import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Repository } from 'typeorm';
import { Language } from './language.entity';

@Injectable()
export class LanguageService {

    constructor(@InjectRepository(Language) private readonly languageRepository: Repository<Language>) { }


    async findall() {

        return await this.languageRepository.find();
    }


    async CreateNewLanguage(language: any) {
        return await this.languageRepository.save({
            name: language.name,
            short_name: language.short_name,
        });
    }

    async DeleteLanguage(language_id) {
        const language = await this.languageRepository.findOne({ id: language_id });

        if (language) {
            await this.languageRepository.remove(language);
            return new ObjectResponse("the Language has been deleted successfully");
        }else{
            throw new NotFoundException("Language NOT FOUND");
        }
    }
}
