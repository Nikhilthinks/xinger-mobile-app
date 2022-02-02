import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/auth/login/login.service';
import {AfterLoginService} from '../../../services/auth/after-login/after-login.service';
import {CommonService} from '../../../services/services_copy/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  userName: string;

  passwordIcon = 'eye-off';

  formProcessing = true;
  errorMsg: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private afterLoginService: AfterLoginService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [this.userName, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async loginUser(event) {
    this.formProcessing = true;
    event.target.disabled = true;
    try {
      const loginResponse = await this.loginService.login(this.loginForm.value).subscribe(
        data => {
          console.log(data);
          this.afterLogin(data);
        },
        error => {
          console.log(error);
          this.errorMsg = error;
          this.formProcessing = false;
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      event.target.disabled = false;
      console.log('finally block of login');
    }
  }

  goToForgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }
  goToSignUp() {
    this.router.navigateByUrl('signup');
  }

  async afterLogin(res) {
    this.commonService.isLoggedIn = true;
    await this.afterLoginService.setAccessToken(res.token.token); // need to remove one token from object model : backend
    this.router.navigate(['home']);
  }

}
