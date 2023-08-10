import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  constructor(public authService: AuthService) { }
  
  ngOnInit() {
  }

  submitHandler(form: NgForm): void {
    // console.log(form.value);
    const value : {email: string; password: string} = form.value;
    
  }
}