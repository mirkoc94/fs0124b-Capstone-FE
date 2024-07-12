import { Component } from '@angular/core';
import { ILoginData } from '../../Models/i-login-data';
import { Router } from '@angular/router';
import { IUser } from '../../Models/i-user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  //LOGIN

  loginData:ILoginData = {
    username : '',
    password : ''
  }

  formType = 'password'

  signIn(){
    this.authSvc.login(this.loginData)
    .subscribe(data => {
      this.router.navigate(['/'])
    })
  }

  showHide():void{
    if(this.formType == 'text'){
      this.formType = 'password'
    } else {
      this.formType = 'text'
    }
  }

  getButtonText():string{
    return this.formType == 'text' ? 'Nascondi' : 'Mostra'
  }

  //REGISTER

  registerData:Partial<IUser> = {}

  formType2 = 'password'

  signUp(){
    this.authSvc.register(this.registerData)
    .subscribe(data => {
      this.router.navigate(['/'])
    })
  }

  showHide2():void{
    if(this.formType2 == 'text'){
      this.formType2 = 'password'
    } else {
      this.formType2 = 'text'
    }
  }

  getButtonText2():string{
    return this.formType2 == 'text' ? 'Nascondi' : 'Mostra'
  }

}
