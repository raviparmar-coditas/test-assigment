import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import * as loginActions from '../../../store/action'
import * as ProductActions from "../store/product.action";
import { productReducer } from '../store/products.reducer';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newItemIdEvent = new EventEmitter<any>();
  @Input() product;

  constructor(public stateService: StateService, private httpService: HttpService, private store: Store<any>) {

    JSON.stringify
  }

  ngOnInit(): void {

  }
  deleteProduct(id) {
    this.store.dispatch(new ProductActions.DeleteProduct(id));
  }
  edit(id) {
    this.store.dispatch(new loginActions.ShowEditProductAction());
    this.newItemIdEvent.emit(id);
  }



}
