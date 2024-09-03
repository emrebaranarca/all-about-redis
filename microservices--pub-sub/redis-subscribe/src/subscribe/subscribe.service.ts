import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscribeService {
    handleMessage(message: string) {
        console.log('Alınan mesaj:', message);
        return { received: true, message };
    }
}
