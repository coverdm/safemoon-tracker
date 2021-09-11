import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { WhaleService } from '../services/whale.service';

@Injectable()
export class WhaleHistoryScheduler {
  private readonly logger = new Logger(WhaleHistoryScheduler.name);

  constructor(private _whaleService: WhaleService) {}

  @Cron('25 * * * * *')
  setWhalesHistory() {
    this.logger.warn('############## Set history of whales ##############');
    // this._whaleService.updateWhalesHistory().then()
  }
}
