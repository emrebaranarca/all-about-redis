import { Controller } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('subscribe')
export class SubscribeController {
    constructor(private readonly subscriberService: SubscribeService) {}
   
    // 'kanal1' adlı Redis kanalını dinle
    @EventPattern('kanal1')
    handleMessage(
        @Payload() message: string
    ) {
      return this.subscriberService.handleMessage(message);
    }
}
