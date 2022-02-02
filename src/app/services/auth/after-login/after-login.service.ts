import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUrlService} from '../../../constants/app-url.service';
import {CommonService} from '../../services_copy/common.service';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from '../../services_copy/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService {
  private isLoggedIn: boolean;
  private accessToken: any;
  private _accessToken$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private httpClient: HttpClient,
    private appURL: AppUrlService,
    private storageService: StorageService
  ) {
  }
  setAccessToken(token) {
    this.isLoggedIn = true;
    this.accessToken = token;
    this._accessToken$.next(token);
    this.storageService.setUserToken('x-auth-token',token);
    return;
  }
}

