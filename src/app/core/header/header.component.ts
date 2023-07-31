import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router, 
    private authService: AuthService
    ) { }

  get isLoggedInAuth(): boolean {
    return this.authService.isLoggedIn;
  }
  
  

  logout(): void {
    this.authService.SignOut();
  }

   get email(): string {
    return this.authService.user;
  }

  get username(): string {
    return this.authService.username;
  }

 
}
