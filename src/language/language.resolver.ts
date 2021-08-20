import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { NewLanguage } from './input/NewLanguage.input';
import { Language } from './language.entity';
import { LanguageService } from './language.service';

@Resolver()
export class LanguageResolver {

    constructor(private readonly languageService : LanguageService){}

    @Query(() => [Language])
    async GetLanguages(){
        return await this.languageService.findall();
    }

    @Mutation(()=>Language)
    async CreateNewLanguage(@Args('language') language : NewLanguage){
        return await this.languageService.CreateNewLanguage(language);
    }

    @Mutation(()=>ObjectResponse)
    async DeleteLanguage(@Args('language_id') language_id : Number){
        return await this.languageService.DeleteLanguage(language_id);
    }



}
