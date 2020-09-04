import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() mode
  constructor(
    public stateService: StateService,
    private httpService: HttpService
  ) {}

  addProductForm = new FormGroup({
    heading: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    id: new FormControl()
  });

  ngOnInit(): void {
    console.log(this.mode);
    
  }
  addProduct(){
    this.httpService.postSecured(environment.addProducts,this.addProductForm.value).subscribe(data =>{
      console.log(data);
      this.stateService.addProductFormView = false;
      this.newItemEvent.emit(data);
    })
  }

  Cancel(){
    this.stateService.addProductFormView = false;
  }
  
}
