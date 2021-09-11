import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StatisticsService } from '../services/statistics.service';

@Injectable()
export class PriceCheckerSchedule {

  private readonly logger = new Logger(PriceCheckerSchedule.name);
  private readonly api_host = 'https://api.coingecko.com/api';

  constructor(private httpService: HttpService, private readonly _statisticsService: StatisticsService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCrop() {
    this.logger.debug('Checking price');
    // this.updatePrice();
  }

  private updatePrice() {
    this.httpService.get(`${this.api_host}/v3/coins/safemoon?tickers=false&market_data=true&community_data=false&developer_data=false`)
      .subscribe(response => {
        this._statisticsService.updatePrice(response.data.market_data.current_price.usd);
      })
  }

}
