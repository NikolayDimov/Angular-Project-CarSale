import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../shared/car';
import { CrudService } from '../../shared/services/crud.service';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  p: number = 1;
  Car: Car[];
  hideWhenNoCar: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  errorMessage: string | null = null;


  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService,
    private authService: AuthService
  ) { }



  get isLoggedInAuth(): boolean {
    return this.authService.isLoggedIn;
  }


  ngOnInit(): void {
    this.dataState();
    let s = this.crudApi.GetCarsList();
    s.snapshotChanges().subscribe({
      next: (data) => {
        this.Car = [];
        data.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.Car.push(a as Car);
          // console.log(this.Car);
        })
      },
      error: (error) => {
        console.error('Error in home ngOnInit:', error);
        this.errorMessage = 'An error occurred: ' + error.message;
      }
    });
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


}
