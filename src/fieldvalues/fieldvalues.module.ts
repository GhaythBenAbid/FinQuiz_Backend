import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldValues } from './fieldvalues.entity';
import { FieldvaluesService } from './fieldvalues.service';
import { FieldvaluesResolver } from './fieldvalues.resolver';
import { Language } from 'src/language/language.entity';
import { Type } from 'src/type/type.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([FieldValues , Type , Language]),
    ],
    providers: [FieldvaluesService, FieldvaluesResolver]
})
export class FieldvaluesModule {}
