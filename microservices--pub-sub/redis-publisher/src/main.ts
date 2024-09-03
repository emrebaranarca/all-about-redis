import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Ana NestJS uygulamasını oluştur
  const app = await NestFactory.create(AppModule);

  // HTTP sunucusunu 3000 portunda başlat
  await app.listen(3000);
}
bootstrap();