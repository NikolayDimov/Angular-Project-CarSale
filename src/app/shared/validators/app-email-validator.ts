import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
  const domainStrings = domains.join("|"); // ['bg', 'com', 'eu'] => bg|com
  const regExp = new RegExp(`[^@]{3,}@[a-z]{2,}\.(${domainStrings})$`);

  return (control) => {
    const x = control.value;
    const z = regExp.test(control.value);
    return control.value === "" || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}


// It takes a form control as its parameter and returns either null (indicating the control is valid) or an object 
// with a validation error key (in this case, appEmailValidator: true), indicating that the validation has failed.
