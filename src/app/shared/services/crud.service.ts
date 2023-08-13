import { Injectable } from '@angular/core';
import { Car } from '../car';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class CrudService {

  carsRef: AngularFireList<any>;
  carRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    public router: Router
  ) { }

  // Create Car
  AddCar(car: Car) {
    this.carsRef.push({
      uid: car.uid,
      brand: car.brand,
      model: car.model,
      engine: car.engine,
      gearshift: car.gearshift,
      euStandard: car.euStandard,
      color: car.color,
      month: car.month,
      year: car.year,
      mileage: car.mileage,
      price: car.price,
      imageUrl: car.imageUrl,
      category: car.category,
      city: car.city,
      additionalInfo: car.additionalInfo,
      // checkArray: car.checkArray,
      ledLights: car.ledLights,
      electricMirrors: car.electricMirrors,
      autoStartStopFunction: car.autoStartStopFunction,
      navigation: car.navigation,
      fourAllFour: car.fourAllFour,
      sunroof: car.sunroof,
      dvd: car.dvd,
      laneAssist: car.laneAssist,
      leatherSalon: car.leatherSalon,
      cruiseControl: car.cruiseControl,
      twoThreeDoors: car.twoThreeDoors,
      fourFiveDoors: car.fourFiveDoors
    });
    this.router.navigate(['cars']);
    return this.carsRef;
  }

  // Fetch Single Car Object
  GetCar(id: string) {
    this.carRef = this.db.object('cars/' + id);
    return this.carRef;
  }

  // Fetch Cars List
  GetCarsList() {
    this.carsRef = this.db.list('cars');
    return this.carsRef;
  }


  // Update Car Object
  UpdateCar(car: Car) {
    this.carRef.update({
      // uid: car.uid,
      brand: car.brand,
      model: car.model,
      engine: car.engine,
      gearshift: car.gearshift,
      euStandard: car.euStandard,
      color: car.color,
      month: car.month,
      year: car.year,
      mileage: car.mileage,
      price: car.price,
      imageUrl: car.imageUrl,
      category: car.category,
      city: car.city,
      additionalInfo: car.additionalInfo,
      // checkArray: car.checkArray,
      ledLights: car.ledLights,
      electricMirrors: car.electricMirrors,
      autoStartStopFunction: car.autoStartStopFunction,
      navigation: car.navigation,
      fourAllFour: car.fourAllFour,
      sunroof: car.sunroof,
      dvd: car.dvd,
      laneAssist: car.laneAssist,
      leatherSalon: car.leatherSalon,
      cruiseControl: car.cruiseControl,
      twoThreeDoors: car.twoThreeDoors,
      fourFiveDoors: car.fourFiveDoors
    });
  }

  // Delete Student Object
  DeleteCar(id: string) {
    this.carRef = this.db.object('cars/' + id);
    this.carRef.remove();
  }
}