import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {stringDistance} from "codelyzer/util/utils";
import {of} from "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";
import {LogLevel, LogService} from '../../log-service/log.service';


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

      LogService.log(LogLevel.ERROR,error); // log to console instead


      LogService.log(LogLevel.ERROR, `${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
