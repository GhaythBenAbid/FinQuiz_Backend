import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.entity';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { LanguageResolver } from './language.resolver';

@Module({
    imports:[
        TypeOrmModule.forFeature([Language]),
    ],
    providers: [LanguageService, LanguageResolver],
    controllers: [LanguageController],
    



})
export class LanguageModule {}
