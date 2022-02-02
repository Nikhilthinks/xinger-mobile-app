import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppUrlService} from '../../../constants/app-url.service';
import {CommonService} from '../../services_copy/common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private appURL: AppUrlService,
  ) {
  }

  public login(data): Observable<any> {
    return this.httpClient.post(this.appURL.LOG_IN, data);
  }
}
