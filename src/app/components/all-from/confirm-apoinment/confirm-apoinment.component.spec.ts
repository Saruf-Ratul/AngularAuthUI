import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApoinmentComponent } from './confirm-apoinment.component';

describe('ConfirmApoinmentComponent', () => {
  let component: ConfirmApoinmentComponent;
  let fixture: ComponentFixture<ConfirmApoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmApoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmApoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
