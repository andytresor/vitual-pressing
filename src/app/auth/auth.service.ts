import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isEmail(email: string): boolean {

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/;
    if (email.match(regex)) {

      return true;
    }

    return false;
  }

  register (data: any) {

    let errors = [];
    if (!this.isEmail(data.email)) {

      errors.push({email: 'Invalid email'});
    }

    if (data.password !== data['confirm-password']) {

      errors.push({ 'confirm-password': 'Please enter same password' });
    }

    if (errors.length === 0) {
      
      // Save my user here
      return {
        error: false,
        data: data
      }
    }

    return {
      error: true,
      data: errors
    }
  }
}
