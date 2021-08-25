import { Injectable } from '@nestjs/common';
import { Whale } from '../schemas/whale.schema';
import { WhaleRepository } from './whale.repository';
import { WhaleUpdateDto } from '../dtos/whale-update.dto';
import { WhaleBtsScanDto } from '../dtos/whale-bts-scan.dto';

@Injectable()
export class WhaleService {

  constructor(private readonly whaleRepository: WhaleRepository) {
  }

  async getWhaleById(whaleId: string): Promise<Whale> {
    return this.whaleRepository.findOne({ id: whaleId });
  }

  async getWhales(): Promise<Whale[]> {
    return this.whaleRepository.findAll();
  }

  async updateWhale(address: string, whale: WhaleUpdateDto): Promise<Whale> {
    return this.whaleRepository.findOneAndUpdate({ address }, whale);
  }

  async updateWhales(whales: WhaleBtsScanDto[]) {
    whales.forEach(whale => {
      this.whaleRepository.findOne({ address: whale.account })
        .then(found => {
          if (found) {
            this.whaleRepository.findOneAndUpdate(
              { address: found.address }, { balance_current: whale.balance }
            );
          } else {
            this.whaleRepository.create({
              address: whale.account,
              balance_current: whale.balance,
              balance_history: whale.balance
            })
          }
        });
    });
  }

}
