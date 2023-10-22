import { LoginserviceService } from '../services/login/loginservice.service';
import { StorageserviceService } from '../services/storage/storageservice.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenEmailValidator, createPasswordStrengthValidator, passwordMatch } from '../Directives/regex.directive';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  error_message: string | null = null

  hero = { email: '', password: '' };
  loginForm!: FormGroup;
  StorageserviceService: any;
  loginError: string = '';

  constructor(
    private storageserviceService: StorageserviceService,
    private loginserviceService: LoginserviceService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.queryParams.subscribe((query: any) => {
      if (query.message) {
        this.error_message = query.message
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.hero.email, [
        Validators.required,
        forbiddenEmailValidator()
      ]),
      password: new FormControl(this.hero.password, [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator()
      ]),
    },
    )
  }

  private clearError (): void {
    setTimeout(() => {
     this.loginError = ''
    }, 2000);
 }
 get email() { return this.loginForm.get('email'); };
 onSubmit() {

   const form = this.loginForm.value;
   const login = this.loginserviceService.login(form.email, form.password)
   if (login.error) {

     this.loginError = login.message;
     this.clearError();
   } else {

     this.router.navigate([''], {

       queryParams: {id: login.data?.id}
     })
   }
 }

}
