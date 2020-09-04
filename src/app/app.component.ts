import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './services/http.service';
import { StateService } from './services/state.service';
import { CustomElement } from './lit-elements/cutom-button-elements';

console.assert(CustomElement !== undefined);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-assignment';
  id:number
  products: any;
  constructor(
    private httpService: HttpService,
    public stateService: StateService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getSecured(environment.getProducts).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  getId(id) {
    console.log(id);
  }
  addItem(newItem: string) {
    this.httpService.getSecured(environment.getProducts).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  editItem(id){
    this.id=id
    console.log(id);

  }
}
