import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})

export class CreateCarComponent implements OnInit {
  public carForm: FormGroup;

  // for the feature with additional extras in array
  // Data: Array<any> = [
  //   { name: 'LED Lights', value: 'ledLights' },
  //   { name: 'Electric Mirrors', value: 'electricMirrors' },
  //   { name: 'Auto Stop Start Func', value: 'autoStartStopFunction' },
  //   { name: 'Navigation', value: 'navigation' },
  //   { name: '4x4', value: 'fourAllFour' },
  //   { name: 'Sunroof', value: 'sunroof' },
  //   { name: 'DVD', value: 'dvd' },
  //   { name: 'Lane Assist', value: 'laneAssist' },
  //   { name: 'Cruise Control', value: 'cruiseControl' },
  //   { name: '2(3) Doors', value: 'twoThreeDoors' },
  //   { name: '4(5) Doors', value: 'fourFiveDoors' },
  // ];

  constructor(
    public crudApi: CrudService,
    public authService: AuthService,
    private fb: FormBuilder,
    public toastr: ToastrService,
  ) {
    this.carForm = this.fb.group({
      checkArray: this.fb.array([])  // for the feature with additional extras in array
    })
  }

  ngOnInit(): void {
    // this.crudApi.GetCarsList(); // not needed
    this.car_Form();
  }

  car_Form() {
    this.carForm = this.fb.group({
      uid: this.authService.uid,
      brand: ['', [Validators.required, Validators.minLength(2), this.emptyString]],
      model: ['', [Validators.required, Validators.minLength(2), this.emptyString]],
      engine: [''],
      gearshift: [''],
      euStandard: [''],
      color: ['', [Validators.required, Validators.minLength(2), this.emptyString]],
      month: [''],
      year: ['', [Validators.required, Validators.minLength(4), this.emptyString]],
      mileage: ['', [Validators.required, Validators.minLength(1), this.emptyString]],
      price: ['', [Validators.required, Validators.minLength(1), this.emptyString]],
      imageUrl: ['', [Validators.required, Validators.minLength(1), this.emptyString]],
      category: [''],
      city: [''],
      additionalInfo: [''],
      // checkArray: this.fb.array([]),
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

  get brand() {
    return this.carForm.get('brand');
  }
  get model() {
    return this.carForm.get('model');
  }
  get engine() {
    return this.carForm.get('engine');
  }
  get gearshift() {
    return this.carForm.get('gearshift');
  }
  get euStandard() {
    return this.carForm.get('euStandard');
  }
  get color() {
    return this.carForm.get('color');
  }
  get month() {
    return this.carForm.get('month');
  }
  get year() {
    return this.carForm.get('year');
  }
  get mileage() {
    return this.carForm.get('mileage');
  }
  get price() {
    return this.carForm.get('price');
  }
  get imageUrl() {
    return this.carForm.get('imageUrl');
  }
  get category() {
    return this.carForm.get('category');
  }
  get city() {
    return this.carForm.get('city');
  }
  get additionalInfo() {
    return this.carForm.get('additionalInfo');
  }
  get autoStartStopFunction() {
    return this.carForm.get('autoStartStopFunction');
  }
  get ledLights() {
    return this.carForm.get('ledLights');
  }
  get electricMirrors() {
    return this.carForm.get('electricMirrors');
  }
  get navigation() {
    return this.carForm.get('navigation');
  }
  get fourAllFour() {
    return this.carForm.get('fourAllFour');
  }
  get sunroof() {
    return this.carForm.get('sunroof');
  }
  get dvd() {
    return this.carForm.get('dvd');
  }
  get laneAssist() {
    return this.carForm.get('laneAssist');
  }
  get leatherSalon() {
    return this.carForm.get('leatherSalon');
  }
  get cruiseControl() {
    return this.carForm.get('cruiseControl');
  }
  get twoThreeDoors() {
    return this.carForm.get('twoThreeDoors');
  }
  get fourFiveDoors() {
    return this.carForm.get('fourFiveDoors');
  }

  ResetForm() {
    this.carForm.reset();
  }

  submitCarData() {
    this.crudApi.AddCar(this.carForm.value);  // to be promise/observable
    console.log(this.carForm.value);
    
    this.toastr.success(
      this.carForm.controls['brand'].value + ' successfully added!'
    );
    this.ResetForm();
  }



  // Custom Validator for checking empty or whitespace
  emptyString(control) {
    if (control.value && control.value.trim() === '') {
      return { noWhiteSpace: true };
    }
    return null;
  }


  // onCheckboxChange(e: any) {
  //   const checkArray: FormArray = this.carForm.get('checkArray') as FormArray;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  // submitForm() {
  //   console.log(this.carForm.value);
  // }


}
