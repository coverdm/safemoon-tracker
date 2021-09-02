import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-whales',
  templateUrl: 'whales.component.html',
  styleUrls: ['whales.component.scss']
})
export class WhalesComponent {

  constructor(private _headerService: HeaderService) {
    this._headerService.title$.next('Whales');
    this._headerService.icon$.next('icon-whale')
  }

}
