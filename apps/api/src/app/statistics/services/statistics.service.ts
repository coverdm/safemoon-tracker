import { Injectable, Logger } from '@nestjs/common';
import { StatisticsRepository } from './statistics.repository';
import { Statistics } from '../schemas/statistics.schema';

@Injectable()
export class StatisticsService {

  private readonly logger = new Logger(StatisticsService.name);

  constructor(private readonly _statisticsRepository: StatisticsRepository) {}

  updatePrice(value: string): Promise<Statistics> {
    return this._statisticsRepository.updatePrice(value);
  }

  updateBurnWalletBalance(balance: string) {
    this.logger.debug(balance);
    return this._statisticsRepository.updateBurnWalletBalance(balance);
  }
}
