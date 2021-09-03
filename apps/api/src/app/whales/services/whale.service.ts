import { Injectable, Logger } from '@nestjs/common';
import { Whale } from '../schemas/whale.schema';
import { WhaleRepository } from './whale.repository';
import { WhaleUpdateDto } from '../dtos/whale-update.dto';
import { WhaleBtsScanDto } from '../dtos/whale-bts-scan.dto';

@Injectable()
export class WhaleService {

  private readonly logger = new Logger(WhaleService.name);

  constructor(private readonly whaleRepository: WhaleRepository) {
  }

  async getWhaleById(whaleId: string): Promise<Whale> {
    return this.whaleRepository.findOne({ id: whaleId });
  }

  async getWhales(): Promise<Whale[]> {
    return this.whaleRepository.findAll();
  }

  async updateWhale(address: string, balance: string) {
    this.logger.debug('########')
    this.logger.debug(address)
    this.logger.debug(balance)
    this.logger.debug('########')
    await this.whaleRepository.findOneAndUpdate(address, {
      balance_current: balance
    });
  }

}
