import { Body, Controller, Post } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('publish')
export class PublisherController {
    constructor(private readonly publisherService:PublisherService){}

    @Post()
    async publishMessage(
        @Body() data:{
            channel:string,
            message:string
        }
    ){
        await this.publisherService.publishMessage(data.channel,data.message)
        return {status:'success',message:'Mesaj yayınlandı'}
    }
}
