import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AfterLoginService} from '../../../services/auth/after-login/after-login.service';
import {LoginService} from '../../../services/auth/login/login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage],
  providers: [
    AfterLoginService,
    LoginService
  ]
})
export class LoginPageModule {}
