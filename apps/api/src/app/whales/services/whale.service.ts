import { Injectable, Logger } from '@nestjs/common';
import { Whale } from '../schemas/whale.schema';
import { WhaleRepository } from './whale.repository';

@Injectable()
export class WhaleService {

  private readonly logger = new Logger(WhaleService.name);

  constructor(private readonly _whaleRepository: WhaleRepository) {
  }

  async getWhaleById(whaleId: string): Promise<Whale> {
    return this._whaleRepository.findOne(whaleId);
  }

  async getWhales(): Promise<Whale[]> {
    const a = await this._whaleRepository.findAll();
    // this.logger.debug(a);
    return this._whaleRepository.findAll();
  }

  async updateWhalesHistory() {
    // this._whaleRepository.rewriteToNewDay().then()
  }

  async updateCurrentBalance(address: string, balance: string) {
    const whale: Whale = await this._whaleRepository.findOne(address);
    if (whale) {
      let updatingBalanceRef: { current: string, date: string } = whale.balance.pop();
      updatingBalanceRef = {...updatingBalanceRef, current: balance };
      whale.balance = [...whale.balance, updatingBalanceRef];
      return this._whaleRepository.findOneAndUpdate(address, whale);
    } else {
      const newBalance: { current: string, date: string }[] = [{current: balance, date: new Date().toString()}];
      return this._whaleRepository.create({address, balance: newBalance});
    }
  }

}
