import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { Topic } from 'src/topic/topic.entity';
import { Repository } from 'typeorm';
import { SubTopic } from './subtopic.entity';

@Injectable()
export class SubtopicService {
    constructor(@InjectRepository(SubTopic) private readonly subTopicRepository : Repository<SubTopic> , @InjectRepository(Topic) private readonly topicRepository : Repository<Topic>){}

    async findall(){
        return await this.subTopicRepository.find();
    }

    async findByTopic(topic_id){
        const topic = await this.topicRepository.findOne(topic_id);
        
        return await this.subTopicRepository.find({where : {topic : topic}});
        

    }
    async CreateNewSubTopic(subtopic : any){
        const topic = await this.topicRepository.findOne(subtopic.topic_id);
        
        
        return await this.subTopicRepository.save({
            name : subtopic.name,
            level : subtopic.level,
            short_name : subtopic.short_name,
            topic : topic,
        });
        

    }


    async DeleteSubTopic(sub_topic_id){
        const sub_topic = await this.subTopicRepository.findOne({id : sub_topic_id});


        if(sub_topic){
            await this.subTopicRepository.remove(sub_topic);
            return new ObjectResponse("The Sub Topic has been deleted successfully");
        }else{
            throw new NotFoundException("The subTopic NOTFOUND");
        }

    }

}
