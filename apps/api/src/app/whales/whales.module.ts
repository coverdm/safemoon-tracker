import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Whale, WhaleSchema } from './schemas/whale.schema';
import { WhaleController } from './controller/whale.controller';
import { WhaleRepository } from './services/whale.repository';
import { WhaleService } from './services/whale.service';
import { WhaleListenerScheduler } from './shedulers/whale-listener.scheduler';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Whale.name, schema: WhaleSchema}]),
    HttpModule
  ],
  controllers: [WhaleController],
  providers: [WhaleRepository, WhaleService, WhaleListenerScheduler]
})
export class WhalesModule {}
