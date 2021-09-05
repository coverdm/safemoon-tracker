import { Whale } from '../schemas/whale.schema';

export class WhaleDto {
  address: string;
  balance: string;
  previous: string;
  change: string;
  constructor(whale: Whale) {
    this.address = whale.address;
    this.balance = whale.balance.pop().current;
    this.previous = whale.balance.pop().current;
    if (isNaN((+this.previous))) {
      this.change = this.previous.toString();
    } else {
      const current: number = +this.balance
      const history: number = +this.previous;
      this.change = (current - history).toString();
    }
  }
}
