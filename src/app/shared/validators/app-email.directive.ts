import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import { appEmailValidator } from "./app-email-validator";

@Directive({
  selector: "[appEmail]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true,
    },
  ],
})
export class AppEmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null;
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes["appEmail"];
    if (currentEmailChanges) {
      this.validator = appEmailValidator(currentEmailChanges.currentValue);
    }
  }
}



/* The @Directive decorator defines the AppEmailDirective. The selector specifies the attribute name for which this directive will apply. The providers array specifies that this directive provides custom validation logic to Angular forms via the NG_VALIDATORS token.

The directive class implements the Validator and OnChanges interfaces, indicating that it will provide validation logic and will respond to changes in its inputs, respectively.
*/

/*The @Input decorator declares an input property named appEmail. This property is used to pass the list of allowed domains to the directive.*/