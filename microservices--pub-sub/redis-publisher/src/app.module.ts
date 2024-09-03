import { Module } from '@nestjs/common';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [PublisherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
