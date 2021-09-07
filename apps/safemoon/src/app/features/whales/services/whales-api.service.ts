import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WHALE_TEST_LIST } from '../test/whale-test';

@Injectable()
export class WhalesApiService {

  constructor(private _httpClient: HttpClient) {}

  getWhales(): Observable<any> {
    // return this._httpClient.get(`http://46.41.136.95:3333/api/whales`);
    return of(WHALE_TEST_LIST)
  }

  getDailyReport(): Observable<any> {
    return of ({
      balance: '30123123123123'
    })
  }

}
