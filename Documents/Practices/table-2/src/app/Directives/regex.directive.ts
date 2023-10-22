import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenEmailValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
        return null;
    }

    // const hasUpperCase = /[A-Z]+/.test(value);

    // const hasLowerCase = /[a-z]+/.test(value);

    // const hasNumeric = /[0-9]+/.test(value);

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(value);

    const emailValid = regex;

    return !emailValid ? {emailStrength:true}: null;
}
}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      // const hasUpperCase = /[A-Z]+/.test(value);

      // const hasLowerCase = /[a-z]+/.test(value);

      // const hasNumeric = /[0-9]+/.test(value);

      const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_+&])(?=.{8,})/.test(value);

      const passwordValid = regexPassword;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}


export function passwordMatch(password: string, confirmPassword: string): ValidatorFn {
  return (FormGroup: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = FormGroup.get(password);
    const confirmPasswordControl = FormGroup.get(confirmPassword);

    if(!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordMismatch']
    ){
      return null
    }

    if (passwordControl.value !== confirmPasswordControl!.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true};
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

export function createPasswordCheck(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const oldPassword = formGroup.controls[password];
    const newPassword = formGroup.controls[confirmPassword];

    if (oldPassword.errors && newPassword.errors?.['passwordCheck']) {
      newPassword.setErrors({ confirmPassword: true })
    } else {
      newPassword.setErrors(null)
    }
  } 
}

export function confirmPasswordValidation(a: string, b: string){
  return(formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[a];
    const confirmPasswordControl = formGroup.controls[b];
    if(confirmPasswordControl.errors && passwordControl.errors?.['confirmPasswordValidator']){
      return;
    }
    if(passwordControl.value !== confirmPasswordControl.value){
      confirmPasswordControl.setErrors({ confirmPasswordValidation :true})
    } else{
      confirmPasswordControl.setErrors(null)
    }
  }
}


@Directive({
  selector: '[appRegex]'
})
export class RegexDirective {

  constructor() { }

}
