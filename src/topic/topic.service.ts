import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';

@Injectable()
export class TopicService {
    constructor(@InjectRepository(Topic) private readonly topicRepository: Repository<Topic>) { }


    async findall() {
        return await this.topicRepository.find();
    }


    async CreateNewTopic(topic: any) {
        return await this.topicRepository.save({
            name: topic.name,
            short_name: topic.short_name,
            level: topic.level,
        })
    }


    async DeleteTopic(topic_id) {
        const topic = await this.topicRepository.findOne(topic_id);

        if (topic) {
            await this.topicRepository.remove(topic);
            return new ObjectResponse("Topic has been deleted successfully");
        }else{
            throw new NotFoundException("Topic NOT FOUND");
        }
    }


}
