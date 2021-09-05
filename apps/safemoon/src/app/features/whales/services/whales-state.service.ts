import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WhalesStateService {
  data$: BehaviorSubject<any | undefined> = new BehaviorSubject<any>(undefined);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
