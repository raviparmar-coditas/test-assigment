import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { CustomElement } from '../../lit-elements/cutom-button-elements';

console.assert(CustomElement !== undefined);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public stateService: StateService) {
    
  }

  ngOnInit(): void {}
  openLoginFrom() {
    this.stateService.loggedInFormView = true;
  }
  logout() {
    this.stateService.isLoggedIn = false;
    console.log('login', this.stateService.isLoggedIn);

    sessionStorage.clear();
  }
  addProduct(){
    this.stateService.addProductFormView = true;
  }
}
