import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  icon$: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
