import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthdrawComponent } from './widthdraw.component';

describe('WidthdrawComponent', () => {
  let component: WidthdrawComponent;
  let fixture: ComponentFixture<WidthdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidthdrawComponent]
    });
    fixture = TestBed.createComponent(WidthdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
