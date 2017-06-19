import { Conf } from '../../conf.class';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetConfListService {
  private confUrl = 'http://127.0.0.1:3000/api/conf/get/conferences?count=10';

  constructor(private http: Http) { }

  getList(): Observable<Conf[]> {
    return this.http.get(this.confUrl)
      .map(this.processResponse)
      .catch(this.handleError);
  }

  private processResponse(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
