import { Injectable } from '@angular/core';
import { WhalesApiService } from './whales-api.service';
import { WhalesStateService } from './whales-state.service';
import { finalize, first } from 'rxjs/operators';

@Injectable()
export class WhalesFacadeService {
  constructor(private _api: WhalesApiService, private _state: WhalesStateService) {}

  get state(): WhalesStateService {
    return this._state;
  }

  loadWhales() {
    this._state.loading$.next(true);
    this._api.getWhales()
      .pipe(
        first(),
        finalize(() => this._state.loading$.next(false))
      )
      .subscribe(
        response => this._state.data$.next(response)
      );
  }

  loadDailyReport() {
    this._state.dailyReportLoading$.next(true);
    this._api.getDailyReport()
      .pipe(
        first(),
        finalize(() => this._state.dailyReportLoading$.next(false))
      )
      .subscribe(
        response => this._state.dailyReport$.next(response)
      );
  }

}
