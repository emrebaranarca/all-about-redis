import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Uygulamayı doğrudan bir mikroservis (redis-microservice) olarak oluştur
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  
  // Mikroservisi başlat ve dinlemeye başla
  await app.listen();
}
bootstrap();
