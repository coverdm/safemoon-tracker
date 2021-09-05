import { Whale } from '../schemas/whale.schema';

export class WhaleDto {
  address: string;
  balance: string;
  change: string;
  constructor(whale: Whale) {
    this.address = whale.address;
    this.balance = whale.balance_current;
    if (isNaN((+whale.balance_history))) {
      this.change = whale.balance_current.toString();
    } else {
      const current: number = +whale.balance_current
      const history: number = +whale.balance_history;
      this.change = (current - history).toString();
    }
  }
}
