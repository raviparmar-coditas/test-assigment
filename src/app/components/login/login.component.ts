import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
  }
  closeForm(){
this.stateService.LoggedInFormView = false;
  }
}
