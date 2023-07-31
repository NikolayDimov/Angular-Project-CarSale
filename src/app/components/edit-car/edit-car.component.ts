import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Car } from 'src/app/shared/car';



@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})

export class EditCarComponent implements OnInit {
  editForm: FormGroup;
  isThereCars: boolean = false;
  CarImage: Car;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    this.updateCarData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetCar(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
        this.CarImage = data;
      });
    
  }



  get brand() {
    return this.editForm.get('brand');
  }
  get model() {
    return this.editForm.get('model');
  }
  get engine() {
    return this.editForm.get('engine');
  }
  get gearshift() {
    return this.editForm.get('gearshift');
  }
  get euStandard() {
    return this.editForm.get('euStandard');
  }
  get color() {
    return this.editForm.get('color');
  }
  get month() {
    return this.editForm.get('month');
  }
  get year() {
    return this.editForm.get('year');
  }
  get mileage() {
    return this.editForm.get('mileage');
  }
  get price() {
    return this.editForm.get('price');
  }
  get imageUrl() {
    return this.editForm.get('imageUrl');
  }
  get category() {
    return this.editForm.get('category');
  }
  get city() {
    return this.editForm.get('city');
  }
  get additionalInfo() {
    return this.editForm.get('additionalInfo');
  }

  updateCarData() {
    this.editForm = this.fb.group({
      uid: this.authService.uid,
      brand: ['', [Validators.required, Validators.minLength(2)]],
      model: [''],
      engine: [''],
      gearshift: [''],
      euStandard: [''],
      color: [''],
      month: [''],
      year: [''],
      mileage: [''],
      price: [''],
      imageUrl: [''],
      category: [''],
      city: [''],
      additionalInfo: [''],
      ledLights: false,
      electricMirrors: false,
      autoStartStopFunction: false,
      navigation: false,
      fourAllFour: false,
      sunroof: false,
      dvd: false,
      laneAssist: false,
      leatherSalon: false,
      cruiseControl: false,
      twoThreeDoors: false,
      fourFiveDoors: false,
    });
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdateCar(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['brand'].value + ' updated successfully'
    );
    this.router.navigate(['edit-my-cars']);
  }

  cancel() {
    this.editForm.reset();
    this.router.navigate(['edit-my-cars']);
   }

  //   deleteCar(id) {
  //   if (window.confirm('Are sure you want to delete this student ?')) {
  //     this.crudApi.DeleteCar(id)
  //     this.toastr.success(id.brand + ' successfully deleted!');
  //   }
  // }
}
