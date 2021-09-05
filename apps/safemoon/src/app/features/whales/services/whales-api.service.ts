import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WhalesApiService {

  constructor(private _httpClient: HttpClient) {}

  getWhales(): Observable<any> {
    return this._httpClient.get(`http://46.41.136.95:3333/api/whales`);
  }

}
