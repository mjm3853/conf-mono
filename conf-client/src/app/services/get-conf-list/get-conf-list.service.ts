import { Conf } from '../../conf.class';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetConfListService {
  private confUrl = 'http://127.0.0.1:3000/api/conf/get/conferences?count=200';

  constructor(private http: Http) { }

  getList(): Observable<Conf[]> {
    return this.http.get(this.confUrl)
      .map(this.processResponse)
      .catch(this.handleError);
  }

  private processResponse(res: Response) {
    let body = res.json();
    body.forEach(element => {
      if (element.date) {
        let date = new Date(element.date)

        let day = date.toISOString().slice(8,10);
        let year = date.getFullYear();

        let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        let monthName = month[date.getMonth()];

        element.date = monthName + " " + day + ", " + year;
      }
    });
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
