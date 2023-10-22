import { DressesService } from './../dresses/dresses.service';
import { Injectable } from '@angular/core';
import { StorageserviceService } from '../storage/storageservice.service';
import { FormInterface } from 'src/app/Interfaces/form-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  constructor(
    private storageServiceService: StorageserviceService,
    private dressesService: DressesService
  ) {}

  private emailExist(email: string): string | null {
    let email_exist: boolean = false;
    const users: Array<FormInterface> =
      this.storageServiceService.select('users');
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const current_user = users[i];
        if (current_user.email == email) {
          email_exist = true;
          break;
        }
      }
    }

    return email_exist ? 'Email already exist !!!' : null;
  }

  private getCurrentDate(): string {
    const date = new Date();
    const created_at =
      date.getUTCFullYear() +
      '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) +
      '-' +
      ('00' + date.getUTCDate()).slice(-2) +
      ' ' +
      ('00' + date.getUTCHours()).slice(-2) +
      ':' +
      ('00' + date.getUTCMinutes()).slice(-2) +
      ':' +
      ('00' + date.getUTCSeconds()).slice(-2);

    return created_at;
  }
  encode(password: string) {
    const encodedPassword = btoa(password);
    return encodedPassword;
  }

  register(user: any) {
    const checkEmail = this.emailExist(user.email);
    if (checkEmail) {
      return {
        error: true,
        message: checkEmail,
      };
    }

    let users: Array<FormInterface> =
      this.storageServiceService.select('users') ?? [];
    user['id'] = Date.now();
    user['created_at'] = this.getCurrentDate();
    user['password'] = this.encode(user.password);
    user['confirmPassword'] = this.encode(user.confirmPassword);
    delete user.confirm_password;
    users.push(user);

    this.storageServiceService.insert('users', users);

    return {
      error: false,
      message: 'User create successfuly !!!',
      data: user,
    };
  }

  checkEmail(email: string): string | null {
    let recorded_email: boolean = true;
    const login_users: Array<FormInterface> =
      this.storageServiceService.select('users');
    if (login_users) {
      for (let i = 0; i < login_users.length; i++) {
        const element = login_users[i];
        recorded_email = true;
        break;
      }
    }
    return recorded_email ? 'Email exits !!' : null;
  }

  resetAccount(email: string, password: string) {
    const verify_email = this.checkEmail(email);
    console.log(verify_email);

    if (!verify_email) {
      return {
        error: true,
        message: verify_email,
      };
    }
    let old_accounts: Array<FormInterface> =
      this.storageServiceService.select('users') ?? [];
    let new_password = password;

    if (old_accounts) {
      for (let i = 0; i < old_accounts.length; i++) {
        const old_account = old_accounts[i];
        if (email == old_account.email) {
          if (new_password != old_account.password) {
            // let old_account.password = new_password
            old_accounts[i].password = new_password;
            // old_accounts.push(old_account)
            break;
          }
        }
        // return old_accounts
      }
    }
    this.storageServiceService.insert('users', old_accounts);
    return {
      error: false,
      message: 'password reset seccessfully',
      data: old_accounts,
    };
  }

  login(email: string, password: string) {
    const users: Array<FormInterface> =
      this.storageServiceService.select('users');
    let login_user: FormInterface | null = null;

    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const encodedPassword = atob(user.password);

        if (user.email == email && encodedPassword == password) {
          login_user = user;
          break;
        }
      }
    }

    if (login_user) {
      this.storageServiceService.insert('auth', login_user);
      return {
        error: false,
        message: 'User login successfully !!!',
        data: login_user,
      };
    }

    return {
      error: true,
      message: 'Wrong Password. Please try again!!!',
    };
  }

  auth() {
    const user: any = this.storageServiceService.select('auth');
    if (user) {
      return {
        error: false,
        message: 'User authenticate',
        data: user,
      };
    }

    return {
      error: true,
      message: 'User not authenticate',
    };
  }

  //   storeDress(userDress: any){
  //     let added: Array<FormInterface> = this.storageServiceService.select('added') ?? [];

  //     // if(users) {
  //     //   for (let i = 0; i < users.length; i++) {
  //     //     const oneUser = users[i];
  //     //     added = oneUser;
  //     //     break
  //     //   }
  //     // }
  //       added.push(userDress)
  //       this.storageServiceService.insert('added', added);

  //      return {
  //       error: false,
  //       message: 'done !!!',
  //       data: userDress
  //      }

  // }

  // done() {
  //   const done: any = this.storageServiceService.select('users') ?? [];
  //   if (done) {
  //     return {
  //       error: false,
  //       message: 'stored info',
  //       data: done
  //     }
  //   }

  //   return {
  //     error: true,
  //     message: 'info not stored'
  //   }
  // }
}
