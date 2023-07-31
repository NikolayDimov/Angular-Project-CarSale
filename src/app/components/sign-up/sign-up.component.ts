import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { appEmailValidator } from "src/app/shared/validators/app-email-validator";
import { matchPasswordsValidator } from "src/app/shared/validators/match-passwords-validator";
import { User } from '../../shared/services/user';

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

}