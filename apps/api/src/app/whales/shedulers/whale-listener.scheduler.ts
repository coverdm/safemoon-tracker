import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { first } from 'rxjs/operators';
import { BscScanWhaleRefresh, WhaleBtsScanDto } from '../dtos/whale-bts-scan.dto';
import { WhaleAddressListConst } from '../const/whale-address-list.const';
import { WhaleService } from '../services/whale.service';

@Injectable()
export class WhaleListenerScheduler {

  private readonly logger = new Logger(WhaleListenerScheduler.name);
  private readonly api_host = 'https://api.bscscan.com/api';
  private readonly api_key = 'C4XIMWNKCHQVZNN5FJV9X9BB7HZDJ7KS28';
  private readonly SafeMoon_Address = '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3';

  private Get_Whales_Api = `${this.api_host}?module=account&action=balancemulti&contractaddress=${this.SafeMoon_Address}&address=${WhaleAddressListConst.join(',')}&tag=latest&apikey=${this.api_key}`;

  constructor(private httpService: HttpService, private whaleService: WhaleService) {
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCrop() {
    this.logger.debug('Check for whale updates');
    this.getWhalesBalance();
  }

  private getWhalesBalance() {
    this.httpService.get<BscScanWhaleRefresh>(this.Get_Whales_Api)
      .pipe(
        first()
      )
      .subscribe(response => {
        const whales: WhaleBtsScanDto[] = response.data.result
        this.whaleService.updateWhales(whales);
      });
  }

}
