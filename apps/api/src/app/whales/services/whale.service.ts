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
    return this._whaleRepository.findAll();
  }

  async updateWhalesHistory() {
    const whales: Whale[] = await this._whaleRepository.findAll();

    whales.forEach((whale: Whale) => {
      this.createBalanceNewRecord(whale.address);
    })
  }

  async updatePositions() {
    const whales: Whale[] = await this._whaleRepository.findAll();



    whales.forEach((whale: Whale, index: number) => {

    })
  }

  async createBalanceNewRecord(address: string) {
    const found: Whale = await this._whaleRepository.findOne(address);

    const newBalance = {
      current: found.balance[found.balance.length - 1].current,
      date: new Date().toString()
    }

    found.balance = [...found.balance, newBalance]

    await this._whaleRepository.findOneAndUpdate(address, found);
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
      const newPosition: { value: number , date: string} [] = [{value: 0, date: new Date().toString()}];
      return this._whaleRepository.create({address, balance: newBalance, position: newPosition});
    }
  }

}
