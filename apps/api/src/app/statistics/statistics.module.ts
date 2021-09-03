import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { Statistics, StatisticsSchema } from './schemas/statistics.schema';
import { StatisticsRepository } from './services/statistics.repository';
import { StatisticsService } from './services/statistics.service';
import { PriceCheckerSchedule } from './shedulers/price-checker.schedule';
import { BurnWalletCheckerSchedule } from './shedulers/burn-wallet-checker.schedule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Statistics.name, schema: StatisticsSchema }]),
    HttpModule
  ],
  providers: [StatisticsRepository, StatisticsService, PriceCheckerSchedule, BurnWalletCheckerSchedule]
})
export class StatisticsModule {

}
