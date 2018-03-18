import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {stringDistance} from "codelyzer/util/utils";
import {of} from "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";


const WEB_API_BASE_URL: string = 'http://localhost:8081/';

@Injectable()
export class WebApiService {


  constructor() {
  }

  protected static getApiUrl(): string {
    return WEB_API_BASE_URL;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      WebApiService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private static log(msg: string){
    console.log(msg);
  }

}
