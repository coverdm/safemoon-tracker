import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-burning',
  templateUrl: 'burning.component.html',
  styleUrls: ['burning.component.scss']
})
export class BurningComponent {

  constructor(private _headerService: HeaderService) {
    this._headerService.title$.next('Burning');
    this._headerService.icon$.next('icon-burning')
  }

}
