import { Component, OnInit } from '@angular/core';
import { WhalesFacadeService } from '../services/whales-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-whales',
  templateUrl: 'whales.component.html',
  styleUrls: ['whales.component.scss']
})
export class WhalesComponent implements OnInit {

  data$: Observable<any | undefined>;
  loading$: Observable<boolean>;

  constructor(private _whalesFacadeService: WhalesFacadeService) {
    this.data$ = _whalesFacadeService.state.data$;
    this.loading$ = _whalesFacadeService.state.loading$;
  }

  ngOnInit(): void {
    this._whalesFacadeService.loadWhales();
  }

}
