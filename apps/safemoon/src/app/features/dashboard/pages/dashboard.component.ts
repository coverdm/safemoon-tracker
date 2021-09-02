import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _headerService: HeaderService) {
    this._headerService.title$.next('Dashboard');
    this._headerService.icon$.next('icon-dashboard')
  }

}
