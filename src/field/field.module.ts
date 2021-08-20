import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { field } from './field.entity';
import { FieldService } from './field.service';
import { FieldResolver } from './field.resolver';
import { QuestionGeneration } from 'src/questiongeneration/questiongeneration.entity';
import { Type } from 'src/type/type.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([field , QuestionGeneration , Type])
    ],
    providers: [FieldService, FieldResolver]
})
export class FieldModule {}
