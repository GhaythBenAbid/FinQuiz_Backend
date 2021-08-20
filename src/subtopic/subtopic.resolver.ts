import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { NewSubTopic } from './input/NewSubTopic.input';
import { SubTopic } from './subtopic.entity';
import { SubtopicService } from './subtopic.service';

@Resolver()
export class SubtopicResolver {

    constructor(private readonly subTopicService : SubtopicService){}


    @Query(()=>[SubTopic])
    async GetAllSubTopics(){
        return await this.subTopicService.findall();
        
    }
    
    @Query(()=>[SubTopic])
    async GetSubTopicById(@Args('topic_id') topic_id : Number){
        return await this.subTopicService.findByTopic(topic_id);
        
    }

    @Mutation(()=>SubTopic)
    async CreateNewSubTopic(@Args('SubTopic') SubTopic : NewSubTopic){
        return await this.subTopicService.CreateNewSubTopic(SubTopic);
        
    }

    @Mutation(()=>ObjectResponse)
    async DeleteSubTopic(@Args('sub_topic_id') sub_topic_id : Number){
        return await this.subTopicService.DeleteSubTopic(sub_topic_id);
        
    }


}
