import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenEmailValidator } from '../Directives/regex.directive';
import { createPasswordStrengthValidator } from '../Directives/regex.directive';
import { confirmPasswordValidation } from '../Directives/regex.directive';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/login/loginservice.service';
import { StorageserviceService } from '../services/storage/storageservice.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  hero = { name: 'Name', email: 'Email', password: 'Password', confirmPassword: 'Confirm Password' };
  profileForm!: FormGroup;
  saveError!: string;


  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        forbiddenEmailValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator()
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    },{
      validator: confirmPasswordValidation('password','confirmPassword')
    }
    )
  }

  onSubmit(profileForm: FormGroup): void {

    const save = this.loginserviceService.register(this.profileForm.value);
    const encrypt = this.loginserviceService.encode('password');
    if(encrypt) {
     encrypt;
   
    if (!save.error) {
      

      this.router.navigate([''], {

        queryParams: {id: save.data.id}
      })
      
    }  else {

      this.saveError = save.message
    }
    // console.warn(this.profileForm.value)
  }
}

  get name() { return this.profileForm.get('name'); };
  get email() { return this.profileForm.get('email'); };
  get password() { return this.profileForm.get('password'); };
  get confirmPassword() { return this.profileForm.get('confirmPassword'); }

  constructor(
    private storageserviceService: StorageserviceService,
    private loginserviceService: LoginserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

}
