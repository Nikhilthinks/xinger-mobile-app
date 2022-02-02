import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private TOKEN: 'token';

  constructor(
  ) { }

  setUserToken(tokenKey, token: string) {
    return localStorage.setItem(tokenKey, token);
  }

  getUserToken() {
    return localStorage.getItem('x-auth-token');
  }
}
