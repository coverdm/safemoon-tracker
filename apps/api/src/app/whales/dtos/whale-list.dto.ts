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

//  92 943 906 904 319 539
//  9 cyfr po przecinku
//  real:
//  92 943 906 . 904 319 539


  /*
  * 10,333,619,101,898.730318245
  * 10333639525210272554139
  *
  *
  * */

}
