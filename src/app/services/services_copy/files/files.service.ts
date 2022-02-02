import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppUrlService} from '../../constants/app-url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  `multipart/form-data; boundary=abcdefg`,
      'Accept': 'application/json',
      'x-auth-token': localStorage.getItem('x-auth-token')
    })
  };
  constructor(
    private httpClient: HttpClient,
    private appURL: AppUrlService,
  ) { }

  public uploadFile(data): Observable<any> {
    debugger;
    return this.httpClient.post(this.appURL.FILE_UPLOAD, data, this.httpOptions);
  }
}
