import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { CarouselModule } from 'ngx-owl-carousel-o';

// Components
import { ContactsComponent } from './contacts/contacts.component';
import { CarsComponent } from './cars/cars.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { EditMyCarsComponent } from './edit-my-cars/edit-my-cars.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { SearchComponent } from './search/search.component';
import { DropDownFilterComponent } from './drop-down-filter/drop-down-filter.component';
import { MoreAdsUserComponent } from './more-ads-user/more-ads-user.component';
import { ShortenPipe } from '../shared/pipes/shorten.pipe';





@NgModule({
  declarations: [
    ContactsComponent,
    CarsComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    CreateCarComponent,
    EditCarComponent,
    VerifyEmailComponent,
    ProfileComponent,
    DetailsCarComponent,
    EditMyCarsComponent,
    SearchComponent,
    DropDownFilterComponent,
    MoreAdsUserComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,  // Include it in imports array
    CarouselModule,
    HttpClientModule

  ],
  exports: [
    ContactsComponent,
    CarsComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    CreateCarComponent,
    VerifyEmailComponent,
    ProfileComponent,
    EditCarComponent,
    DetailsCarComponent,
    EditMyCarsComponent,
    MoreAdsUserComponent
  ]
})
export class ComponentsModule { }
