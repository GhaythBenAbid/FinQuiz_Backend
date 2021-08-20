import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectResponse } from 'src/ObjectReponse/ObjectResponse';
import { NewTopic } from './input/NewTopic.input';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Resolver()
export class TopicResolver {
    
    constructor(private readonly topicService : TopicService){}

    @Query(()=>[Topic])
    async GetAllTopics(){
        return await this.topicService.findall();
    }

    
    @Mutation(()=>Topic)
    async CreateNewTopic(@Args('Topic') topic : NewTopic){
        return await this.topicService.CreateNewTopic(topic);
    }
    
    @Mutation(()=>ObjectResponse)
    async DeleteTopic(@Args("topic_id") topic_id : Number){
        return await this.topicService.DeleteTopic(topic_id);
    }



}
