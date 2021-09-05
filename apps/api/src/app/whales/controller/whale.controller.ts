import { Controller, Get, Logger, Param } from '@nestjs/common';
import { WhaleService } from '../services/whale.service';
import { Whale } from '../schemas/whale.schema';
import { WhaleDto } from '../dtos/whale-list.dto';

@Controller('whales')
export class WhaleController {
  private readonly logger = new Logger(WhaleController.name);

  constructor(private readonly whaleService: WhaleService) {}

  @Get(':whaleId')
  async getWhale(@Param('whaleId') whaleId: string): Promise<Whale> {
    return this.whaleService.getWhaleById(whaleId);
  }

  @Get()
  async getWhales(): Promise<WhaleDto[]> {
    return this.whaleService.getWhales()
      .then(whales => {
        return whales.map(whale => new WhaleDto(whale));
      })
  }
}
