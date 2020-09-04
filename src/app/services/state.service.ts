import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  loggedInFormView:boolean = false;
  addProductFormView:boolean = false;
  editProductFormView:boolean = false;
  isLoggedIn:boolean  = false;
  get user(): any {
    return sessionStorage.getItem('token');
}
  constructor() { }
}
