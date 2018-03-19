
import {Injectable} from '@angular/core';
import {WebApiService} from "../../services/web-api.service";
import {BasicInfo} from "../beans/BasicInfo";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {log} from "util";

@Injectable()
export class BasicInfoService extends WebApiService {

  constructor(private http:HttpClient) {
    super();
  }

  public getBasicInfo(): Observable<BasicInfo> {
    let url=BasicInfoService.getApiUrl()+"info/";
    log('Fetching...');
    log(url);
    let observable:Observable<BasicInfo> = this.http.get<BasicInfo>(url).pipe(
      catchError(this.handleError('getHeroes',BasicInfo.prototype))
    );
    log('Fetching End');
    return observable;
  }

}
