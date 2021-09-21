import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { WhaleService } from "../services/whale.service";

@Injectable()
export class WhalePositionScheduler {

  constructor(private whaleService: WhaleService) {}

  @Cron('55 * * * * *')
  updatePositions() {

  }


}
