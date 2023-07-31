import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Car } from 'src/app/shared/car';



@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})

export class DetailsCarComponent  implements OnInit {

  Car: Car;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    public authService: AuthService,

  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetCar(id)
      .valueChanges()
      .subscribe((data) => {
        this.Car = data;
        // console.log(this.Car);  -> this.Car.object
      });
      
    }


  
  goBack() {
    this.location.back();
  }
  

  // For Loop
  // onCheckboxChange(checkboxKey: string) {
  //   console.log(`Checkbox ${checkboxKey} is ${this.Car[checkboxKey] ? 'checked' : 'unchecked'}.`);
  // }
  
 
}

