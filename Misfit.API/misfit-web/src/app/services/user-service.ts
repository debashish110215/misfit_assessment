import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserCalculation } from '../models/ceUserCalculation';
import { UserListProperty } from '../models/userListingProperty';
import { GlobalVariable } from '../common/GlobalConst';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri = 'api/user';

  constructor(
    private http: HttpClient
  ) { }

  getUserByName(userName: string): Observable<any> {
    return this.http.get<any>(this.uri + '/getuserbyname?userName=' + userName);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.uri);
  }

  getAllForList(pagingModel: UserListProperty): Observable<any> {
    return this.http.post(this.uri + '/getforlist', pagingModel, GlobalVariable.httpOptions);
  }

  postModel(model: UserCalculation): Observable<any> {
    return this.http.post(`${this.uri}`, model, GlobalVariable.httpOptions);
   // return this.http.post<any>(this.uri, model);
  }

  public handleError<Terror>(operation = 'operation', result?: Terror) {
    return (error: any): Observable<Terror> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as Terror);
    };
  }
}

