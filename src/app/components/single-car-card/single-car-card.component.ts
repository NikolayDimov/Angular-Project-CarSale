import { Component, Input } from '@angular/core';
import { Car } from 'src/app/shared/car';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-single-car-card',
  templateUrl: './single-car-card.component.html',
  styleUrls: ['./single-car-card.component.css']
})
export class SingleCarCardComponent {
  @Input('dataItem') dataItem: Car;
  
  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    //console.log("2 - " + searchValue);

    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  
  constructor(
    private router: Router,
    public crudApi: CrudService,
    private toastr: ToastrService,  
    ) {}

  deleteCar(carId) {
    if (window.confirm('Are sure you want to delete this Car Offer ?')) {
      this.crudApi.DeleteCar(carId)
      this.toastr.success(carId.brand + ' successfully deleted!');
    }
  }
}
