import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null) {
      var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      if (control.value && emailRegexp.test(control.value)) {
        return Promise.resolve({ invalidEmail: true });
      }
      return Promise.resolve(null);
    }
    return { invalidEmail: true };
  };
}
