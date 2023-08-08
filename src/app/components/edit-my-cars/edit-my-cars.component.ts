import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/services/user.service';
import { Car } from 'src/app/shared/car';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { toArray } from 'rxjs/operators';




@Component({
  selector: 'app-edit-my-cars',
  templateUrl: './edit-my-cars.component.html',
  styleUrls: ['./edit-my-cars.component.css']
})

export class EditMyCarsComponent implements OnInit {
  
  userData$: Observable<Car[]>;
  Cars: Car[];
  p: number = 1;
  hasUserDataAds: boolean = false;
  filteredData: Car[] = [];
  isFilterApplied: boolean = false;
  
  hideWhenNoCar: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private dataService: DataService,
    public crudApi: CrudService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,    
  ) { }

  ngOnInit() {
    // const id = this.actRoute.snapshot.paramMap.get('id');
    
    

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // User is logged in, retrieve the user's UID
        const userUID = user.uid;
        // console.log(userUID);
        

        // Use the UID to filter the data for the logged-in user
        this.userData$ = this.dataService.getItemsByUID(userUID);
       // console.log(this.userData$);


        
        //----------------------------------------------------------------
        let observableData = of(this.userData$);

        // observableData.pipe(
        //   isEmpty()
        // ).subscribe(isEmpty => {
        //   if (isEmpty) {
        //     console.log('The Observable is empty.');
        //   } else {
        //     console.log('The Observable has data.');
        //   }
        // })
        

        // observableData.subscribe(
        //   data => {
        //     if (data === undefined) {
        //       console.log('The Observable is empty.');
        //     } else {
        //       console.log('The Observable has data.');
        //       // Here you can do something with the data if needed
        //     }
        //   },
        //   error => {
        //     console.error('An error occurred:', error);
        //   },
        //   () => {
        //     console.log('The Observable completed.');
        //   }
        // );

        // observableData.pipe(
        //   isEmpty(),
        //   toArray()
        // ).subscribe(
        //   data => {
        //     if (data.length === 0 && isEmpty) {
        //       console.log('The Observable is empty.');
        //     } else {
        //       console.log('The Observable has data.');
        //       // Here you can do something with the data if needed
        //     }
        //   },
        //   error => {
        //     console.error('An error occurred:', error);
        //   },
        //   () => {
        //     console.log('The Observable completed.');
        //   }
        // );
        //----------------------------------------------------------------

      }
    });
  }

  

 


  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    console.log("2 - " + searchValue);

    this.searchText = searchValue;
    // console.log(this.searchText);
    
  }

  
  deleteCar(carId) {
    if (window.confirm('Are sure you want to delete this Car Offer ?')) {
      this.crudApi.DeleteCar(carId)
      this.toastr.success(carId.brand + ' successfully deleted!');
    }
  }



  // drop-down-filter
  updateFilteredData(filteredData: Car[]) {
    this.filteredData = filteredData;
    this.isFilterApplied = true;
  }


}