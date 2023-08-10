import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { appEmailValidator } from "../../shared/validators/app-email-validator";
import { matchPasswordsValidator } from "../../shared/validators/match-passwords-validator";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  uid: string;
  email: string;
  displayName: string;

    form = this.fb.group({
      email: ["",[Validators.required, appEmailValidator(['bg', 'com', 'eu'])]],
      passGroup: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(6)]],
          rePassword: ["", [Validators.required]],
        },
        {
          validators: [matchPasswordsValidator("password", "rePassword")],
        }
      ),
    });


  constructor(
    public authService: AuthService, 
    private fb: FormBuilder) { }
  
  ngOnInit() { }


  // There is also func SingUp in html template
  SignUpUser() {
    this.authService.SignUp(this.form.controls.email.value.trim(), this.form.controls.passGroup.controls.password.value);
  }

}