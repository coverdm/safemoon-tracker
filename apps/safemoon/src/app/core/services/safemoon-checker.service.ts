import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SafemoonCheckerService {
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(0.0000023);
}
