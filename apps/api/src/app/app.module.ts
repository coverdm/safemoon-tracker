import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WhalesModule } from './whales/whales.module';
import { ScheduleModule } from '@nestjs/schedule';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dmatuszak:M@tuszak887@cluster0.etwja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    ScheduleModule.forRoot(),
    WhalesModule,
    StatisticsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
