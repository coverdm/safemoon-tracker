import { Whale } from '../schemas/whale.schema';

export class WhaleDto {
  address: string;
  balance: string;
  previous: string;
  change: string;

  constructor(whale: Whale) {
    this.address = whale.address;
    const [first, second] = whale.balance;
    this.balance = BigInt(first.current).toString();
    this.previous = BigInt(second?.current || '0').toString();
    this.change = (BigInt(this.balance) - BigInt(this.previous)).toString();
  }
}
