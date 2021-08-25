import { Controller, Get, Param } from '@nestjs/common';
import { WhaleService } from '../services/whale.service';
import { Whale } from '../schemas/whale.schema';

@Controller('whales')
export class WhaleController {

  constructor(private readonly whaleService: WhaleService) {}

  @Get(':whaleId')
  async getWhale(@Param('whaleId') whaleId: string): Promise<Whale> {
    return this.whaleService.getWhaleById(whaleId);
  }

  @Get()
  async getWhales(): Promise<Whale[]> {
    return this.whaleService.getWhales();
  }
}
