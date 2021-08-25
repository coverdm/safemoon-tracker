import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Whale, WhaleDocument } from '../schemas/whale.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class WhaleRepository {

  constructor(@InjectModel(Whale.name) private whaleModel: Model<WhaleDocument>) {}

  async findOne(whaleFilterQuery: FilterQuery<Whale>): Promise<Whale> {
    return this.whaleModel.findOne({ whaleFilterQuery });
  }

  async findAll(): Promise<Whale[]> {
    return this.whaleModel.find()
  }

  async find(whaleFilterQuery: FilterQuery<Whale>): Promise<Whale[]> {
    return this.whaleModel.find({ whaleFilterQuery })
  }

  async create(whale: Whale): Promise<Whale> {
    const newWhale = new this.whaleModel(whale);
    return newWhale.save();
  }

  async findOneAndUpdate(whaleFilterQuery: FilterQuery<Whale>, whale: Partial<Whale>): Promise<Whale> {
    return this.whaleModel.findOneAndUpdate({ whaleFilterQuery }, whale);
  }

}
