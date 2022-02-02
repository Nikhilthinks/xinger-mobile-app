import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from './storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private accessToken: BehaviorSubject<String> = new BehaviorSubject<String>(null);
  public isLoggedIn = false;
  constructor(
    private storageService: StorageService
  ) {}
  checkLoginStatus() {
    if(this.storageService.getUserToken()) {
      return this.isLoggedIn = true;
    } else {
      return this.isLoggedIn = false;
    }
  }
}
