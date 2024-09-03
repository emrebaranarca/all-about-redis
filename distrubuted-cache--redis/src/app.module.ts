import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    // We are setting redis config as async format
    CacheModule.registerAsync(
      {
        useFactory:()=>({
          ttl:5,
          isGlobal: true,
          store: redisStore,
          host: 'localhost',
          port: 6379,
        })
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
