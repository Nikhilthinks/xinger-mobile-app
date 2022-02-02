import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppUrlService} from '../../constants/app-url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-auth-token': localStorage.getItem('x-auth-token')
    })
  };

  constructor(
    private httpClient: HttpClient,
    private appURL: AppUrlService,

  ) { }

  public getMyCustomers(): Observable<any> {
    return this.httpClient.get(this.appURL.MY_CUSTOMERS, this.httpOptions);
  }
}

export class CustomerModal {

  customerName: string;
  phone: string;
  amountPaid: number;
  amountDue: number;

  constructor(item) {
    this.customerName = item.buyer.name || '';
    this.phone = item.buyer.phone || '';
    this.amountPaid = item.rzpObject.amount_paid || '';
    this.amountDue = item.rzpObject.amount_due || '';
  }
}
