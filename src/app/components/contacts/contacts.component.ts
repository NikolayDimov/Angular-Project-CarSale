import { Component, OnInit } from '@angular/core';
//import { Geolocation } from '@angular/common/geolocation';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  latitude: number | undefined;
  longitude: number | undefined;

  constructor() {}

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        },
        (error) => {
          if (error.code === 1) {
            console.error('User denied geolocation access.');
            // Provide user-friendly feedback here.
          } else {
            console.error('Error getting geolocation:', error.message);
          }
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  

}
