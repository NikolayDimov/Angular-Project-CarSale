import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/shared/car';
import { CrudService } from 'src/app/shared/services/crud.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  p: number = 1;
  Cars: Car[];
  filteredData: Car[] = [];
  isFilterApplied: boolean = false;

  hideWhenNoCar: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  // isLoggedInAuth(): boolean {
  //   console.log(this.authService.isLoggedIn);
  //   return this.authService.isLoggedIn;
  // }

  // redirectToDetails(): void {
  //   this.router.navigateByUrl('/details-car/{{ car.$key }}');
  // }

  // redirectToRegister(): void {
  //   this.router.navigateByUrl('/register-user');
  // }
  

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetCarsList();
    s.snapshotChanges().subscribe(data => {
      this.Cars = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Cars.push(a as Car);
        // console.log(this.Cars); // array of objects with cars
      })
    })
  }

  dataState() {
    this.crudApi.GetCarsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoCar = false;
        this.noData = true;
      } else {
        this.hideWhenNoCar = true;
        this.noData = false;
      }
    })
  }
  

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    console.log("2 - " + searchValue);

    this.searchText = searchValue;
    // console.log(this.searchText);
  }



  // drop-down-filter
  updateFilteredData(filteredData: Car[]) {
    this.filteredData = filteredData;
    this.isFilterApplied = true;
  }

  clearFilter() {
    this.isFilterApplied = false;
  }

}
