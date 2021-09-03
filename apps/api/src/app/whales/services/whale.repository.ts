import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Whale, WhaleDocument } from '../schemas/whale.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class WhaleRepository {
  private readonly logger = new Logger(WhaleRepository.name);

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
    this.logger.debug(whale);
    const newWhale = new this.whaleModel(whale);
    return newWhale.save();
  }

  async findOneAndUpdate(address: string, whale: Partial<Whale>): Promise<Whale> {
    return this.whaleModel.findOneAndUpdate({ address }, whale, {upsert: true});
  }

  async findWhaleByAddress(address: string): Promise<Whale> {
    return this.whaleModel.findOne({ address })
  }

}
