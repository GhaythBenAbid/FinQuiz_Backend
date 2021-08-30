import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { SubTopic } from 'src/subtopic/subtopic.entity';
import { Topic } from 'src/topic/topic.entity';
import { Repository } from 'typeorm';
import { QuestionGeneration } from './questiongeneration.entity';

@Injectable()
export class QuestiongenerationService {

    constructor(
        @InjectRepository(QuestionGeneration) private readonly questionGenerationRepository: Repository<QuestionGeneration>,
        @InjectRepository(SubTopic) private readonly subTopicRepository: Repository<SubTopic>,
        @InjectRepository(Topic) private readonly topicRepository: Repository<Topic>

    ) { }

    async findall() {
        return await this.questionGenerationRepository.find({ relations: ["sub_topic", "topic"] });
    }

    async findOne(question_generation_id: Number) {
        const question_generation = await this.questionGenerationRepository.findOne({ id: question_generation_id }, { relations: ["sub_topic", "topic"] });

        if (question_generation) {
            return question_generation;
        } else {
            throw new NotFoundException("Question Generator NOT FOUND");
        }

    }

    async CreateNewQuestionGenerator(questiongeneration: any) {

        const sub_topic = await this.subTopicRepository.findOne({ id: questiongeneration.sub_topic_id });

        const topic = await this.topicRepository.findOne({ id: questiongeneration.topic_id });

        if (sub_topic || topic) {

            return await this.questionGenerationRepository.save({
                name: questiongeneration.name,
                points: questiongeneration.points,
                level: questiongeneration.level,
                weight: questiongeneration.weight,
                function : questiongeneration.function,
                difference_variation : questiongeneration.difference_variation,
                sub_topic: sub_topic,
                topic: topic,
            });

        } else {
            throw new NotFoundException("sub topic ID not found");
        }
    }


    async GetQuestionGeneratorByTopicAndLevel(sub_topic_id, min_level, max_level) {

        return await this.questionGenerationRepository.createQueryBuilder("questionGeneration")
        .leftJoinAndSelect("questionGeneration.topic" , "topic")
        .leftJoinAndSelect("questionGeneration.sub_topic" , "sub_topic")
        .where("questionGeneration.level >= :min_level and questionGeneration.level <= :max_level and questionGeneration.sub_topic_id = :sub_topic_id" , {min_level : min_level , max_level : max_level , sub_topic_id : sub_topic_id})
        .getMany()



    }



    async DeleteQuestionGenerator(question_generation_id) {
        const questiongeneration = await this.questionGenerationRepository.findOne({ id: question_generation_id });


        if (questiongeneration) {
            this.questionGenerationRepository.remove(questiongeneration);
            return new ObjectResponse("the Question generator has been deleted successfully");
        } else {
            throw new NotFoundException("Question generator NOT FOUND");
        }

    }

}
