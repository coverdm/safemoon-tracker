import { Whale } from '../schemas/whale.schema';

export class WhaleDto {
  address: string;
  balance: string;
  change: string;
  constructor(whale: Whale) {
    this.address = whale.address;
    this.balance = whale.balance_current;
    this.change = ((+whale.balance_current) - (+whale.balance_history)).toString() || '0';
  }
}
