import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public stateService: StateService,
    private httpService: HttpService
  ) {}

  loginform = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}
  login() {
    this.httpService.postLogin(environment.login,this.loginform.value).subscribe(data =>{
      console.log(data);
      sessionStorage.setItem('token',data.access_token);
      this.stateService.loggedInFormView = false;
      this.stateService.isLoggedIn = true;
      console.log("login",this.stateService.isLoggedIn);
      
    } )

  }

  logout(){
    this.stateService.isLoggedIn = false;
    console.log("login",this.stateService.isLoggedIn);

    
  }
}
