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

        if (isNaN((+whales[0].balance_history))) {
          whales[0].balance_current.toString();
          this.logger.log(`isNan: ${whales[0].balance_current.toString()}`);
        } else {
          const current: number = +whales[0].balance_current
          const history: number = +whales[0].balance_history;
          this.logger.log(current);
          this.logger.log(history);
          this.logger.log((current + history).toString());
        }
        return whales.map(whale => new WhaleDto(whale));
      })
  }
}
