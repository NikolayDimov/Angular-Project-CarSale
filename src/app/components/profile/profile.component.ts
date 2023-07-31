import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import { User } from "src/app/shared/services/user";
import { NgForm } from '@angular/forms';


import { appEmailValidator } from "src/app/shared/validators/app-email-validator";


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})

export class ProfileComponent {
  isEditMode: boolean = false;


  constructor(
    public authService: AuthService,
    private fb: FormBuilder
    ) { }

  profileForm = this.fb.group({
    // username: ["", [Validators.required, Validators.minLength(5)]],
    // uid:[''],
    email: ["", [Validators.required, appEmailValidator(['bg', 'com', 'eu'])],],
    // tel: [""],
    // ToDo: render this from the template and make more fields on click of a button
    // persons: this.fb.array([]),
  });




  submitHandler(form: NgForm): void {
    const value : {email: string; password: string} = form.value;
  }
}
