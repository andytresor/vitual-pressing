import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDressesComponent } from './drop-dresses.component';

describe('DropDressesComponent', () => {
  let component: DropDressesComponent;
  let fixture: ComponentFixture<DropDressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDressesComponent]
    });
    fixture = TestBed.createComponent(DropDressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
