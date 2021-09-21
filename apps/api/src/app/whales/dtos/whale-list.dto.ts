import { Whale } from '../schemas/whale.schema';

export class WhaleDto {
  address: string;
  balance: string;
  previous: string;
  change: string;

  constructor(whale: Whale) {
    this.address = whale.address;
    const [first, second] = whale.balance;
    this.balance = this.correctTokens(BigInt(first?.current || '').toString());
    this.previous = this.correctTokens(BigInt(second?.current || '0').toString());
    this.change = (BigInt(this.balance) - BigInt(this.previous)).toString();
  }

  private correctTokens(tokens: string): string {
    if (tokens.length > 9) {
      return tokens.substr(0, tokens.length - 9);
    }
    return tokens;
  }
}
