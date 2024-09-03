import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'REDIS_PUBLISHER', // Redis istemcisi için benzersiz bir isim
        transport: Transport.REDIS, // Redis'i iletişim protokolü olarak kullan
        options: {
          host: 'localhost',
          port: 6379,
        }
      },
    ]),
  ],
  controllers: [PublisherController],
  providers: [PublisherService]
})
export class PublisherModule {}
