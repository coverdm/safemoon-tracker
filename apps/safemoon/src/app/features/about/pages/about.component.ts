import { Component } from '@angular/core';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  constructor(private _headerService: HeaderService) {
    this._headerService.title$.next('About');
    this._headerService.icon$.next('icon-about')
  }


}
