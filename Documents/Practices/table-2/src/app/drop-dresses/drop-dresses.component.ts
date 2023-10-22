import { DressesService } from './../services/dresses/dresses.service';
import {
  DressesInterface,
  FormInterface,
  tableInterface,
} from 'src/app/Interfaces/form-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from './../services/login/loginservice.service';
import { StorageserviceService } from './../services/storage/storageservice.service';
import { TableService } from './../services/table/table.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-drop-dresses',
  templateUrl: './drop-dresses.component.html',
  styleUrls: ['./drop-dresses.component.css'],
})
export class DropDressesComponent implements OnInit {
  trial!: DressesInterface;
  data: any;
  dressForm!: FormGroup;
  saveError!: string;

  constructor(
    private tableService: TableService,
    private storageserviceService: StorageserviceService,
    private loginserviceService: LoginserviceService,
    private dressesService: DressesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['data']);
    });
  }

  tables = this.tableService.table;

  todaysDate: any;

  ngOnInit(): void {
    this.dressForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      number: new FormControl('', [Validators.required]),
      entry_date: new FormControl('', [Validators.required]),
      delivery_date: new FormControl('', [Validators.required]),
    });
  }

  submit(dressForm: FormGroup): void {
    const save = this.dressesService.saveClient(this.dressForm.value);

    if (!save.error) {
      this.router.navigate([''], {
        queryParams: { id: save.data.id },
      });
    } else {
      this.saveError = save.message;
    }
    // console.warn(this.profileForm.value)
  }

  get name() {
    return this.dressForm.get('name');
  }
  get number() {
    return this.dressForm.get('name');
  }
  get antry_sate() {
    return this.dressForm.get('name');
  }
  get delivery_date() {
    return this.dressForm.get('name');
  }
}
