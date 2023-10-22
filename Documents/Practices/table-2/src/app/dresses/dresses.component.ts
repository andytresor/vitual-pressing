import { LoginserviceService } from './../services/login/loginservice.service';
import { StorageserviceService } from './../services/storage/storageservice.service';
import { DressesInterface, FormInterface, ItermsInterface } from './../Interfaces/form-interface';
import { DressesService } from './../services/dresses/dresses.service';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';


import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent {

  dress = this.dressesService.dresses
  constructor(
    private dressesService: DressesService,
  public dialog: MatDialog

  ){}

  openDialog(val: any) {
    const item = val
    this.dialog.open(DialogElementsExampleDialog, { data: item },);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dresses-modal.html',
  styleUrls: ['./dresses-modal.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, NgFor, RouterModule ],
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DressesInterface,
  public storageserviceService: StorageserviceService,
  public dressesService: DressesService,
  public router: Router,
  private loginserviceService: LoginserviceService ) { }

  // items(){
  //   let item = this.dressesService.dresses
  //   let result = [];
  //   for (let i = 0; i < item.length; i++) {
  //     const OneItem = item[i].iterms;
  //     for (let i = 0; i < OneItem.length; i++) {
  //       const eachIterm = OneItem[i].vetements;
  //       console.log(eachIterm);
        
  //       result.push(eachIterm)
  //     }
  //   }
  //   return result
  // }

  sendDress(val: any) {
    const data = JSON.stringify(val)
    this.router.navigate(['/drop-dresses'], {
      queryParams:{data: data}
    })
  }
  
  
  // save(userDress: any){
  //  userDress=this.loginserviceService.register(userDress);

  //    return {
  //     error: false,
  //     message: 'done !!!',
  //     data: userDress
  //    }
  // }
  
}
