import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Whale, WhaleDocument } from '../schemas/whale.schema';
import { FilterQuery, Model, Schema } from 'mongoose';

@Injectable()
export class WhaleRepository {
  private readonly logger = new Logger(WhaleRepository.name);

  constructor(@InjectModel(Whale.name) private whaleModel: Model<WhaleDocument>) {
  }

  async findOne(address: string): Promise<Whale> {
    return this.whaleModel.findOne({ address });
  }

  async findAll(): Promise<Whale[]> {
    return this.whaleModel.find();
  }

  async find(whaleFilterQuery: FilterQuery<Whale>): Promise<Whale[]> {
    return this.whaleModel.find({ whaleFilterQuery });
  }

  async create(whale: Whale): Promise<Whale> {
    const newWhale = new this.whaleModel(whale);
    return newWhale.save();
  }

  async findOneAndUpdate(address: string, whale: Partial<Whale>): Promise<Whale> {
    return this.whaleModel.findOneAndUpdate({ address }, whale);
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
