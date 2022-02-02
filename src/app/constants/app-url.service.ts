import { Injectable } from '@angular/core';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppUrlService {
  constructor() {
  }

  public get AppUrl_V1(): string {
    return environment.appURL + environment.port;
  }

  public get LOG_IN(): string {
    return this.AppUrl_V1 + '/api/auth';
  }

  public get SIGN_UP(): string {
    return this.AppUrl_V1 + '/api/users';
  }

  public get MY_CUSTOMERS(): string {
    return this.AppUrl_V1 + '/api/customers';
  }

  public get PACKAGE_POST(): string {
    return this.AppUrl_V1 + '/api/tourpackage/add';
  }

  public get FILE_UPLOAD(): string {
    return this.AppUrl_V1 + '/api/tourpackage/upload';
  }

}
