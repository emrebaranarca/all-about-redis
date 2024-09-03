import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublisherService {
    constructor(
        // Redis istemcisini enjekte et
        @Inject('REDIS_PUBLISHER') private client: ClientProxy
    ){}

    // Belirtilen kanala mesaj yayınla
    async publishMessage(channel:string,message:string){
        return this.client.emit(channel,message)
    }

}
