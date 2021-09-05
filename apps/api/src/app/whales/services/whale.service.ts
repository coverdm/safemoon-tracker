import { Injectable, Logger } from '@nestjs/common';
import { Whale } from '../schemas/whale.schema';
import { WhaleRepository } from './whale.repository';
import { WhaleUpdateDto } from '../dtos/whale-update.dto';
import { WhaleBtsScanDto } from '../dtos/whale-bts-scan.dto';

@Injectable()
export class WhaleService {

  private readonly logger = new Logger(WhaleService.name);

  constructor(private readonly _whaleRepository: WhaleRepository) {
  }

  async getWhaleById(whaleId: string): Promise<Whale> {
    return this._whaleRepository.findOne({ id: whaleId });
  }

  async getWhales(): Promise<Whale[]> {
    return this._whaleRepository.findAll();
  }

  async updateWhale(address: string, balance: string) {
    await this._whaleRepository.findOneAndUpdate(address, {
      balance_current: balance
    });
  }

  async updateWhalesHistory() {
    const whales: Whale[] = await this._whaleRepository.findAll();
    whales.forEach(whale => {
      this._whaleRepository.findOneAndUpdate(whale.address, {balance_history: whale.balance_current}).then()
    });
  }

}
