import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(private readonly languageService : LanguageService){}

    @Get()
    async getHello(){
        return await this.languageService.findall();
  
    }
}
