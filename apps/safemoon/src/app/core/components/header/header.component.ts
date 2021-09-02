import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  title$: Observable<string>;
  icon$: Observable<string>;

  constructor(private _headerService: HeaderService) {
    this.title$ = _headerService.title$;
    this.icon$ = _headerService.icon$;
  }
}
