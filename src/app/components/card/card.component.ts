import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { CustomElement } from '../../lit-elements/cutom-button-elements';
import { Store } from '@ngrx/store';
import * as loginActions from '../../store/action'

console.assert(CustomElement !== undefined);
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newItemIdEvent = new EventEmitter<any>();
  @Input() product;

  constructor(public stateService: StateService,private httpService:HttpService,private store: Store<any>) {
    
    JSON.stringify
   }

  ngOnInit(): void {
    // console.log("products",this.product);
    
  }
  deleteProduct(id){
    this.httpService.deleteSecured(environment.deleteProducts.replace('{id}',id)).subscribe(data =>{
      console.log(data);
      this.newItemEvent.emit(data);
    })
  }
  edit(id){
    // this.stateService.editProductFormView = true;
    this.store.dispatch(new loginActions.ShowEditProductAction());
    this.newItemIdEvent.emit(id);
  }
  
  

}
