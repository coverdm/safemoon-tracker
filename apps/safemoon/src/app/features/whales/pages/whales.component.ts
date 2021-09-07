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
  dailyReport$: Observable<{ balance: string }>;
  dailyReportLoading$: Observable<boolean>

  constructor(private _whalesFacadeService: WhalesFacadeService) {
    this.data$ = _whalesFacadeService.state.data$;
    this.loading$ = _whalesFacadeService.state.loading$;
    this.dailyReport$ = _whalesFacadeService.state.dailyReport$;
    this.dailyReportLoading$ = _whalesFacadeService.state.dailyReportLoading$;
  }

  ngOnInit(): void {
    this._whalesFacadeService.loadWhales();
    this._whalesFacadeService.loadDailyReport();
  }

  onTabChanged(id: string) {

  }
}
