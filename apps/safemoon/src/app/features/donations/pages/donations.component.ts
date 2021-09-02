import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-donations',
  templateUrl: 'donations.component.html',
  styleUrls: ['donations.component.scss']
})
export class DonationsComponent {

  constructor(private _headerService: HeaderService) {
    this._headerService.title$.next('Donations');
    this._headerService.icon$.next('icon-donations')
  }

}
