import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bank } from './bank';

@Injectable()
export class BankService {

  private banksUrl = 'http://localhost:9000/api/banks';

  constructor(private http: Http) { }

  getBanks(): Promise<Bank[]> {
    return this.http.get(this.banksUrl)
             .toPromise()
             .then(response => response.json() as Bank[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
