import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register({
    //? If you want, chance absolute time and sliding time
    //ttl:5,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
