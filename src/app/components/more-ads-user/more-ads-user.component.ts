
import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/services/user.service';
import { Car } from 'src/app/shared/car';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { DataSharedService } from '../../shared/services/sharedObj.service';



@Component({
  selector: 'app-more-ads-user',
  templateUrl: './more-ads-user.component.html',
  styleUrls: ['./more-ads-user.component.css']
})

export class MoreAdsUserComponent implements OnInit {

  userDataMoreAds$: Observable<Car[]>;
  Cars: Car[];
  sharedCarObj: Car;
  currCarUid: string;

  p: number = 1;
  hasUserDataAds: boolean = false;
  filteredData: Car[] = [];
  isFilterApplied: boolean = false;

  hideWhenNoCar: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;



  constructor(
    private dataService: DataService,
    public crudApi: CrudService,
    public dataSharedService: DataSharedService
  ) { }


  ngOnInit(): void {
    this.sharedCarObj = this.dataSharedService.getSharedObject();
    this.currCarUid = this.sharedCarObj.uid;
    // console.log(this.sharedCarObj);


    // Use this.dataService.getItemsByUID to filter the data for the user'a more car ads
    this.userDataMoreAds$ = this.dataService.getItemsByUID(this.currCarUid);
    // console.log(this.userDataMoreAds$);
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


}
