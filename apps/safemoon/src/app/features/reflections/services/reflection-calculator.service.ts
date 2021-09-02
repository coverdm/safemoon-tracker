import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, merge, Observable, of } from 'rxjs';
import { SafemoonCheckerService } from '../../../core/services/safemoon-checker.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ReflectionCalculatorService {

  averagePrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  volume$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  days$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  tokens$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  currentBalance$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  futureBalance$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private _safemoonCheckerService: SafemoonCheckerService) {
  }

  reflectedPerDay$(): Observable<number> {
    return merge(this.volume$, this.tokens$)
      .pipe(
        map(() => {
          if (this.volume$.getValue() && this.tokens$.getValue()) {
            const reflectedUSD = (this.volume$.getValue() * this.tokens$.getValue()) / 20000000000000000;
            return +(reflectedUSD / this.averagePrice$.getValue()).toFixed(2);
          }
          return 0;
        })
      )
  }

  futureAmountReflected$(): Observable<number> {
    return this.reflectedPerDay$()
      .pipe(
        map(value => value * this.days$.getValue())
      )
  }

  checkBalance(tokens: number) {
    this.tokens$.next(tokens);
    const value = this.averagePrice$.getValue() * tokens;
    this.currentBalance$.next(+value.toFixed(2));
  }

  setAveragePrice(price: number) {
    this.averagePrice$.next(price);
  }

  onVolumeChanged(price: number) {
    this.volume$.next(price);
  }

  onDaysChanged(value: number) {
    this.days$.next(value);
  }

}
