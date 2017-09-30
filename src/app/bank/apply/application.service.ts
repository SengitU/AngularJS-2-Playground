import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Application } from './application';

@Injectable()
export class ApplicationService {

  private applicationUrl = 'http://localhost:9000/api/apply';

  constructor(private http: Http) { }

  apply(application: Application): Promise<Application> {
    return this.http.post(this.applicationUrl, JSON.stringify(application))
             .toPromise()
             .then(response => response.json() as Application)
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
