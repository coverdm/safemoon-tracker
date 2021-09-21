import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { first } from 'rxjs/operators';
import { BscScanBalance } from '../dtos/bsc-scan-balance.dto';
import { StatisticsService } from '../services/statistics.service';

@Injectable()
export class BurnWalletCheckerSchedule {

  private readonly logger = new Logger(BurnWalletCheckerSchedule.name);
  private readonly API_HOST = 'https://api.bscscan.com/api';
  private readonly API_KEY = 'C4XIMWNKCHQVZNN5FJV9X9BB7HZDJ7KS28';
  private readonly SAFEMOON_ADDRESS = '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3';
  private readonly SAFEMOON_BURN_WALLET_ADDRESS = '0x0000000000000000000000000000000000000001';

  private GET_BURN_WALLET_URL = `${this.API_HOST}?module=account&action=balance&contractaddress=${this.SAFEMOON_ADDRESS}&address=${this.SAFEMOON_BURN_WALLET_ADDRESS}&tag=latest&apikey=${this.API_KEY}`;

  constructor(private _httpService: HttpService, private _statisticsService: StatisticsService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCrop() {
    // this.logger.debug('Check for burn wallet');
    // this.getBurnWallet();
  }

  private getBurnWallet() {
    this._httpService.get<{ result: string }>(this.GET_BURN_WALLET_URL)
      .pipe(
        first()
      )
      .subscribe(response => {
        const burnWallet: string = response.data.result;
        this._statisticsService.updateBurnWalletBalance(burnWallet.toString());
      });
  }
}
