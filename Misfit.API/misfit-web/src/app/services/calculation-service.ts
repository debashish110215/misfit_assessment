import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CalculateSum } from '../models/CalculateSum';
import { GlobalVariable } from '../common/GlobalConst';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private uri = 'api/calculation';

  constructor(
    private http: HttpClient
  ) { }

  getSum(model: CalculateSum): Observable<any> {
    return this.http.post(`${this.uri}` + '/sum', model, GlobalVariable.httpOptions);
  }
}
