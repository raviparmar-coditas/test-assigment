import { ActionReducer, Action } from '@ngrx/store';
import { State } from './modal';
import * as formViewActions from './action';

export const initialState: State = {
    loggedInFormView : false,
    addProductFormView : false,
    editProductFormView : false,
  };

export function reducer(state = initialState, action: formViewActions.Actions): State {
    switch (action.type) {
      case formViewActions.SHOW_LOGIN: {
        return {...state,loggedInFormView: true}
      }
  
      case formViewActions.HIDE_LOGIN: {
        return {...state,loggedInFormView: false}
      }

      case formViewActions.SHOW_ADD_PRODUCT: {
        return {...state,addProductFormView: true}
      }
  
      case formViewActions.HIDE_ADD_PRODUCT: {
        return {...state,addProductFormView: false}
      }

      case formViewActions.SHOW_EDIT_PRODUCT: {
        return {...state,editProductFormView: true}
      }
  
      case formViewActions.HIDE_EDIT_PRODUCT: {
        return {...state,editProductFormView: false}
      }
  
      default: 
        return state;
      
    }
  }