import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppUrlService} from '../../constants/app-url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token': localStorage.getItem('x-auth-token')
    })
  };

  constructor( private httpClient: HttpClient,
               private appURL: AppUrlService,
  ) {
  }

  public createPackage(data): Observable<any> {
    return this.httpClient.post(this.appURL.PACKAGE_POST, data, this.httpOptions);
  }
}
