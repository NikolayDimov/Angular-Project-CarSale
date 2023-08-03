// data.service.ts
import { Injectable } from '@angular/core';
import { Car } from '../car';

@Injectable({
  providedIn: 'root',
})
export class DataSharedService {
  private sharedObject: Car;

  setSharedObject(object: Car) {
    this.sharedObject = object;        
  }

  getSharedObject() {
    return this.sharedObject;
  }
}
