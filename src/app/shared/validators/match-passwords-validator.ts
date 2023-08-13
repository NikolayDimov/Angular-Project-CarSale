import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
  passwordCtrlOne: string,
  passwordCtrlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passCtrl1 = group.get(passwordCtrlOne);
    const passCtrl2 = group.get(passwordCtrlTwo);

    return passCtrl1?.value === passCtrl2?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}



/* 
Inside the returned ValidatorFn, the function first casts the input control as a FormGroup because it expects the 
input control to be a form group that contains the password controls to be compared.

The code then retrieves the form controls with the names provided (passwordCtrlOne and passwordCtrlTwo) using 
the get method of the FormGroup. These are the password controls that will be compared.

The function compares the values of the two password controls. If the values match, it returns null, indicating 
that the validation has passed and the passwords match. If the values do not match, it returns an object with 
the matchPasswordsValidator key, indicating a validation error.
*/