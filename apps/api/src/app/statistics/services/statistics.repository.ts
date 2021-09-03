import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Statistics, StatisticsDocument } from '../schemas/statistics.schema';
import { Model } from 'mongoose';

@Injectable()
export class StatisticsRepository {

  constructor(@InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDocument>) {}

  getStatistics(): Promise<Statistics> {
    return this.statisticsModel.findOne({ id: 1 }).exec();
  }

  updatePrice(value: string): Promise<Statistics> {
    return this.statisticsModel
      .findOneAndUpdate({ id: 1 }, { price_current: value })
      .exec();
  }

  updatePriceHistory(value: string): Promise<Statistics> {
    return this.statisticsModel
      .findOneAndUpdate({ id: 1 }, { price_current: value, price_history: value })
      .exec();
  }

  updateBurnWalletBalance(balance: string): Promise<Statistics> {
    return this.statisticsModel
      .findOneAndUpdate({ id: 1 }, { burn_amount: balance })
      .exec();
  }

}
