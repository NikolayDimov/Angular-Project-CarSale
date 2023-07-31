import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { EditMyCarsComponent } from './components/edit-my-cars/edit-my-cars.component';
import { AuthGuard } from './shared/guard/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'home', loadChildren: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'createCar', component: CreateCarComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: 'details-car/:id', component: DetailsCarComponent, canActivate: [AuthGuard] },
  { path: 'edit-my-cars', component: EditMyCarsComponent },
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})

export class AppRoutingModule {}




// scroll to the top when change routes
// {scrollPositionRestoration: 'enabled'}