import { Injectable } from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private storageService: StorageService
  ) { }

  getToken() {
    return this.storageService.getUserToken();
  }
}
