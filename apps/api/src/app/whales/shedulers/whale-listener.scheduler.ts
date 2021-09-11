import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { map } from 'rxjs/operators';
import {
  WHALE_ADDRESS_LIST_TOP_10,
  WHALE_ADDRESS_LIST_TOP_15,
  WHALE_ADDRESS_LIST_TOP_5
} from '../const/whale-address-list.const';
import { WhaleService } from '../services/whale.service';
import { merge, Observable } from 'rxjs';

@Injectable()
export class WhaleListenerScheduler {

  private readonly logger = new Logger(WhaleListenerScheduler.name);
  private readonly api_host = 'https://api.bscscan.com/api';
  private readonly api_key = 'C4XIMWNKCHQVZNN5FJV9X9BB7HZDJ7KS28';
  private readonly SafeMoon_Address = '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3';

  constructor(private httpService: HttpService, private whaleService: WhaleService) {
  }

  @Cron('35 * * * * *')
  handleTop5() {
    this.getWhalesBalance(WHALE_ADDRESS_LIST_TOP_5);
  }

  @Cron('40 * * * * *')
  handleTop10() {
    this.getWhalesBalance(WHALE_ADDRESS_LIST_TOP_10);
  }

  @Cron('45 * * * * *')
  handleTop15() {
    this.getWhalesBalance(WHALE_ADDRESS_LIST_TOP_15);
  }


  private getWhalesBalance(addresses: string[]) {
    merge(...addresses.map(address => this._getAccountBalance(address)))
      .subscribe(value => {
        // @ts-ignore
        this.whaleService.updateCurrentBalance(value.result[0].account, value.result[0].balance).then()
      });
  }

  private _getAccountBalance(address: string): Observable<{ status: string, message: string, result: string }> {
    return this.httpService.get<{ status: string, message: string, result: string }>(
      `${this.api_host}?module=account&action=balancemulti&contractaddress=${this.SafeMoon_Address}&address=${address}&tag=latest&apikey=${this.api_key}`
    ).pipe(map(response => response.data));
  }

}
