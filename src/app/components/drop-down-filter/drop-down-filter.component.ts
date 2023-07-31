import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/shared/car';


@Component({
  selector: 'app-drop-down-filter',
  templateUrl: './drop-down-filter.component.html',
  styleUrls: ['./drop-down-filter.component.css']
})

export class DropDownFilterComponent {
  
  @Input() Cars: Car[] = [];  
  @Output() filteredDataEvent = new EventEmitter<Car[]>();
  filterValue: string = ''; // Replace this with the value you want to filter by

  ngOnChanges(changes: SimpleChanges) {
    // Whenever the 'Cars' input changes (data received from parent), apply the filter
    if (changes.Cars && this.Cars) {      
      this.applyFilter();
    }
  }

  applyFilter() {
   // Convert the filterValue to lowercase for case-insensitive filtering
   const filterValueLowercase = this.filterValue.toLowerCase().trim();

   // Apply the filter based on the filterValue   
   const filteredData = this.Cars.filter((obj) => {
     // Check if any property in the object contains the filterValue (case-insensitive)
     return Object.values(obj).some((value) => {
       if (typeof value === 'string') {
         return value.toLowerCase().includes(filterValueLowercase);
       }
       return false;
     });
   });
   
    this.filteredDataEvent.emit(filteredData);
  }
      
      
  
  
  
}
