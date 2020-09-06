import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Store } from '@ngrx/store';
import { CustomElement } from '../../lit-elements/cutom-button-elements';
import { Observable } from 'rxjs';
import * as loginActions from '../../store/action'
console.assert(CustomElement !== undefined);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public loggedInFormView: boolean
  constructor(public stateService: StateService,private store: Store<any>) {
    // this.loggedInFormView$ = store.select('loginView');
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state, 'header');
    })
    // console.log(this.loggedInFormView$);

    //toggle
  let checkbox = document.querySelector('input[name=theme]');

  checkbox.addEventListener('change', function() {
      if(this.checked) {
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
      } else {
          trans()
          document.documentElement.setAttribute('data-theme', 'light')
      }
  })

  let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
      }, 1000)
  }

  }
  openLoginFrom() {
    // this.stateService.loggedInFormView = true;
    this.store.dispatch(new loginActions.ShowLoginAction());
  }
  logout() {
    // this.stateService.isLoggedIn = false;
    this.store.dispatch(new loginActions.HideLoginAction());

    console.log('login', this.stateService.isLoggedIn);

    sessionStorage.clear();
  }
  addProduct(){
    // this.stateService.addProductFormView = true;
    this.store.dispatch(new loginActions.ShowAddProductAction());
  }


  
}
