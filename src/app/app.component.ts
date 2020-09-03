import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './services/http.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-assignment';
  products: any;
  constructor(
    private httpService: HttpService,
    public stateService: StateService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getSecured(environment.login).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  getId(id) {
    console.log(id);
  }
}
