import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';
import { Observable } from 'rxjs';
import { ReflectionCalculatorService } from '../services/reflection-calculator.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reflections',
  templateUrl: 'reflections.component.html',
  styleUrls: ['reflections.component.scss']
})
export class ReflectionsComponent  {

  currentBalance$: Observable<number>;
  futureBalance$: Observable<number>;
  reflectedPerDay$: Observable<number>;
  futureAmountReflected$: Observable<number>;

  form: FormGroup;
  test = 1.8680506485384535e-11;

  constructor(private _headerService: HeaderService, private _reflectionCalculatorService: ReflectionCalculatorService) {
    this._headerService.title$.next('Reflections');
    this._headerService.icon$.next('icon-reflections')
    this.currentBalance$ = _reflectionCalculatorService.currentBalance$
    this.futureBalance$ = _reflectionCalculatorService.futureBalance$
    this.reflectedPerDay$ = _reflectionCalculatorService.reflectedPerDay$()
    this.futureAmountReflected$ = _reflectionCalculatorService.futureAmountReflected$();

    this.form = new FormGroup({
      tokens: new FormControl(),
      averagePrice: new FormControl(),
      volume: new FormControl(),
      days: new FormControl(),
    })
  }

  onTokenChanged(value: string) {
    this._reflectionCalculatorService.checkBalance(+value);
  }

  onAveragePriceChanged(value: string) {
    this._reflectionCalculatorService.setAveragePrice(+value);
    this._reflectionCalculatorService.checkBalance(this.form.value.tokens);
  }

  onVolumeChanged(value: string) {
    this._reflectionCalculatorService.onVolumeChanged(+value)
  }

  onDaysChanged(value: string) {
    this._reflectionCalculatorService.onDaysChanged(+value)
  }

}
