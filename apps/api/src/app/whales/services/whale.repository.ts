import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Whale, WhaleDocument } from '../schemas/whale.schema';
import { FilterQuery, Model, Schema } from 'mongoose';

@Injectable()
export class WhaleRepository {
  private readonly logger = new Logger(WhaleRepository.name);

  constructor(@InjectModel(Whale.name) private whaleModel: Model<WhaleDocument>) {
  }

  async findOne(whaleFilterQuery: FilterQuery<Whale>): Promise<Whale> {
    return this.whaleModel.findOne({ whaleFilterQuery });
  }

  async findAll(): Promise<Whale[]> {
    return this.whaleModel.find();
  }

  async find(whaleFilterQuery: FilterQuery<Whale>): Promise<Whale[]> {
    return this.whaleModel.find({ whaleFilterQuery });
  }

  async create(whale: Whale): Promise<Whale> {
    this.logger.debug(whale);
    const newWhale = new this.whaleModel(whale);
    return newWhale.save();
  }

  async findOneAndUpdate(address: string, whale: Partial<Whale>): Promise<Whale> {
    return this.whaleModel.findOneAndUpdate({ address }, whale, { upsert: true });
  }

  async updateCurrentBalance(address: string, balance: string) {
    const whale: Whale = await this.whaleModel.findOne({ address });

    if (whale) {
      let updatingBalanceRef: { current: string, date: string } = whale.balance.pop();
      updatingBalanceRef = {...updatingBalanceRef, current: balance };
      whale.balance = [...whale.balance, updatingBalanceRef];
      await this.whaleModel.updateOne({address}, whale);
    } else {

      const newBalance: { current: string, date: string }[] = [{current: balance, date: new Date().toString()}];

      const whale = new this.whaleModel({
        address,
        balance: newBalance
      });

      await whale.save();
    }
  }

  async rewriteToNewDay() {
    const whales: Whale[] = await this.whaleModel.find();

    whales.forEach(whale => {
      whale.balance.push({
        date: new Date().toString(),
        current: whale.balance[0].current
      })
      this.findOneAndUpdate(whale.address, whale).then()
    })
  }

}
