import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {

    const data = form.value;
    const save = this.authService.register(data);
    if (save.error === true) {
      console.log(save.data);
      // Show error to user in template
    } else {

      this.router.navigate(['my-account'], {
        queryParams: {name: data.name}
      });
    }
  }
}
